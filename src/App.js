import GraphEditor from "./GraphEditor";
import React from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Reset from "./components/Reset";
import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { auth, firestore as db, logout } from "./firebase";
import { query, collection, getDocs, where, QuerySnapshot } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

export default function App() {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [profilePicture, setProfilePicture] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");


    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");
        fetchUserInfo()
    }, [user, loading])

    const fetchUserInfo = () => {
        console.log(user);
        setName(user.displayName);
        setEmail(user.email);
        if(user.photoURL){
            setProfilePicture(user.photoURL);
        }
    }

    return (
        <Routes>
            <Route path="/" element={<GraphEditor name={name} email={email} profile_picture={profilePicture} logout={logout} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/dashboard" element={<Dashboard name="" />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}