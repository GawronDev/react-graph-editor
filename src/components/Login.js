import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import Spinner from "./Spinner";
import { FaGoogle } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate("/");
    }, [user, loading]);

    return (
        <div className="login">
            <div className="login__container">
            <div className="login-img">
            </div>
                <input
                    type="text"
                    className="login__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="login__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button
                    className="login__btn"
                    onClick={() => logInWithEmailAndPassword(email, password)}
                >
                    Login
                </button>
                <button className="login__btn login__google" onClick={signInWithGoogle}>
                {< FaGoogle />} Login with Google 
                </button>
                <div>
                    <Link className="article-link" to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link className="article-link" to="/register">Register</Link> now.
                </div>
            </div>
        </div>
    );
};