import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCg0LLutT2b6nradZiIDcgCOk19OrHPIp8",
  authDomain: "carreracarros-37ea2.firebaseapp.com",
  projectId: "carreracarros-37ea2",
  storageBucket: "carreracarros-37ea2.appspot.com",
  messagingSenderId: "468077123520",
  appId: "1:468077123520:web:b86f80fa99d556570a1a25"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore().collection("podio");
