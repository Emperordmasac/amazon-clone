import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-clone-701dc.cloudfunctions.net/api",

    //"http://localhost:5001/clone-701dc/us-central1/api", api url (cloud function)
});

export default instance;
