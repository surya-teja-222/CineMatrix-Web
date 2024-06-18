import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import BaseApp from "./BaseApp";

// Google Analytics
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

require("firebase/app-check");

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_AUTH,
    authDomain: "cinematrix-143.firebaseapp.com",
    projectId: "cinematrix-143",
    storageBucket: "cinematrix-143.appspot.com",
    messagingSenderId: "209726079634",
    appId: "1:209726079634:web:3f10bfafd58b08e2cadc4b",
    measurementId: "G-GRNH879JLF",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
getPerformance(app);




ReactDOM.render(
    <React.StrictMode>
        <BaseApp />
    </React.StrictMode>,
    document.getElementById("root")
);
