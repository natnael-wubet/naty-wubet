// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "firebase/auth";

import { getDatabase } from "firebase/database";
const firebaseConfig = {
	apiKey: "AIzaSyBqDpCJwm0BWap9mzFgIRxAQCysZ__O8dE",
	authDomain: "naty-wubet.firebaseapp.com",
	projectId: "naty-wubet",
	storageBucket: "naty-wubet.firebasestorage.app",
	messagingSenderId: "327276508776",
	appId: "1:327276508776:web:3b9d25220becf717e7eddd",
	measurementId: "G-6WMDN1XN66",
};

// Initialize Authentication
const auth = getAuth(app);

const db = getDatabase(app);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app, analytics, auth, db };
