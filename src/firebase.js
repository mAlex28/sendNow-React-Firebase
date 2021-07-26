import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCKh0IvuXY5l-WUlIZ55QG-GfHs4Fs0zl4",
    authDomain: "sendnow-507af.firebaseapp.com",
    projectId: "sendnow-507af",
    storageBucket: "sendnow-507af.appspot.com",
    messagingSenderId: "307137714881",
    appId: "1:307137714881:web:709f404f5991aa01fa9240",
  })
  .auth();
