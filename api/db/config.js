// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
//const { getAnalytics } = require('firebase/analytics');
const { getFirestore } = require('firebase/firestore');
const { getAuth } = require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyBVCDPtXrIET6w1KhH4vfptgKnrfAdJ1ZY",
  authDomain: "blogproject-8bf66.firebaseapp.com",
  projectId: "blogproject-8bf66",
  storageBucket: "blogproject-8bf66.appspot.com",
  messagingSenderId: "233954112819",
  appId: "1:233954112819:web:29478fb42f619ce137fa46",
  measurementId: "G-EE7P7380KW"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth(app);

module.exports = { db, auth };