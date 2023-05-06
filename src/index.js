import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./master.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUZdfWZ6zXEbL6IR3pxREulUEdfu8mejI",
  authDomain: "react-graph-editor.firebaseapp.com",
  projectId: "react-graph-editor",
  storageBucket: "react-graph-editor.appspot.com",
  messagingSenderId: "115064411865",
  appId: "1:115064411865:web:432172396259e8f71bd0c8",
  measurementId: "G-MB2W62PNDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(<App />, document.getElementById("root"));
