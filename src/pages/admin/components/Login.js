import React from "react";
import firebase from "firebase";

export default function Login() {
    return (
        <div>
            <button
                onClick={login}
            >
                Sign In Anonymously
            </button>
        </div>
    );

    /**
     * Nous connecte à Firebase de manière anonyme
     */
    function login() {
        firebase.auth().signInAnonymously();
    }
}