// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1Hhsr0m3OTJXuTuSng-yHW08MXwgIClM",
    authDomain: "lego-toys-9c8f5.firebaseapp.com",
    projectId: "lego-toys-9c8f5",
    storageBucket: "lego-toys-9c8f5.appspot.com",
    messagingSenderId: "942160411271",
    appId: "1:942160411271:web:9a4564466a5b1fd645d622"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;