import React from "react";
import { createRoot } from 'react-dom/client';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

import BaseApp from "./BaseApp";
import "./index.css";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_AUTH,
    authDomain: "cinematrix-143.firebaseapp.com",
    projectId: "cinematrix-143",
    storageBucket: "cinematrix-143.appspot.com",
    messagingSenderId: "209726079634",
    appId: "1:209726079634:web:3f10bfafd58b08e2cadc4b",
    measurementId: "G-GRNH879JLF",
};

if (process.env.NODE_ENV === "production") {
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
    getPerformance(app);
}


const container = document.getElementById("root");
const root = createRoot(container);

root.render(<BaseApp />);
