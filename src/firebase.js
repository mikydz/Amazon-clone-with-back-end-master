// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0ljVMt-Fswd-PXl8QR4M6PYH1zCJkjUU",
  authDomain: "my-1b2ea.firebaseapp.com",
  projectId: "my-1b2ea",
  storageBucket: "my-1b2ea.appspot.com",
  messagingSenderId: "554372573499",
  appId: "1:554372573499:web:cdd0f7b4003b26b69b2f1e",
  measurementId: "G-DPLMNCQY17",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
