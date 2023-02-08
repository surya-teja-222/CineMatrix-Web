import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import Lenis from "@studio-freight/lenis";

// GOogle Analytics
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

const lenis = new Lenis({
  duration: 1.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1.2,
  smoothTouch: true,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
