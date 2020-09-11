const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51HPvS7D9lt17aIFOzhmp2k3Xp9nLbShnKWEI2q4q02yoFSwH5wyonY1E4xgAoJwJXcDlnisL13OKRrK2gSShVtzL00LKtw2ajo"
);

// we are going to build an express app and host it on a cloud function

// - Setting up API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    console.log("payment request received BOOM for this amount >>>>> ", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // Ok, created something
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen Command
exports.api = functions.https.onRequest(app);

// --Example of an endPoint:  http://localhost:5001/clone-701dc/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
