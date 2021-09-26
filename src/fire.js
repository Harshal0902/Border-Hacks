import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAfNkXBPReZy0rVMHmswWc-zTlhT6CorCs",
  authDomain: "traffic-check-8b14d.firebaseapp.com",
  projectId: "traffic-check-8b14d",
  storageBucket: "traffic-check-8b14d.appspot.com",
  messagingSenderId: "767644236026",
  appId: "1:767644236026:web:abd7325bbd8ac972c63143",
  measurementId: "G-QS4SK3YL1V"
};

const fire = firebase.initializeApp(firebaseConfig)

export default fire;