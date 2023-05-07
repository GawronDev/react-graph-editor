import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, firestore as db, logout } from "../firebase";
import { query, collection, getDocs, where, QuerySnapshot } from "firebase/firestore";
import "../component_css/dashboard.css";

export default function Dashboard(props) {
  
  return (
    <div className="dashboard">
       <div className="dashboard__container">
        Logged in as
        <div>{props.name}</div>
        <div>{props.email}</div>
         <button className="dashboard__btn" onClick={logout}>
          Logout
         </button>
       </div>
     </div>
  );
}
