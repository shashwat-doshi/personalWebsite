import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

var firebaseApp = firebase.initializeApp({

    // Import the functions you need from the SDKs you need

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration{
    apiKey: "AIzaSyDgxQEH2vpct1MyA7l0OmsBHrRC4gXbERY",
    authDomain: "contact-page-96905.firebaseapp.com",
    projectId: "contact-page-96905",
    storageBucket: "contact-page-96905.appspot.com",
    messagingSenderId: "419054102183",
    appId: "1:419054102183:web:460e02f62e67f17dc85d82"

});

var db = firebaseApp.firestore();

export { db };