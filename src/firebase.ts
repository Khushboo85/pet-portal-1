import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAt6B-VP37Gtd8ho46BCEWOSv_cIVIzA-s",
  authDomain: "pet-hotel-28820.firebaseapp.com",
  projectId: "pet-hotel-28820",
  storageBucket: "pet-hotel-28820.appspot.com",
  messagingSenderId: "849438434305",
  appId: "1:849438434305:web:26bcf86f3ebe39e8970c00",
  measurementId: "G-ZC8L1XB1RW",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
