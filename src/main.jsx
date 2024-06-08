import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FirebaseProvider } from "firebase-react-sdk";
import { firebaseConfig } from "./firebase/firebase.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseProvider>
  </React.StrictMode>
);
