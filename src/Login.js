import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            })
            .catch((e) => alert(e.message));
    };

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            })
            .catch((e) => alert(e.messgae));
    };

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amzon_logo.svg.png"
                    alt="amzon header"
                />
            </Link>
            <div className="login__container">
                <h1>SIGN IN</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                    />
                    <h5>Password</h5>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                    />
                    <button
                        onClick={login}
                        type="submit"
                        className="login__signInButton"
                    >
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to amazon's conditions of use and
                    safe. Please see our privacy notice, oue cookies notice and
                    our interest-based Ads-Notice.
                </p>
                <button onClick={register} className="login__registerButton">
                    Create Your Amazon Account
                </button>
            </div>
        </div>
    );
}

export default Login;
