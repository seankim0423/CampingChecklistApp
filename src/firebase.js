import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDF3hNpWg4zr0_VzCS3NCVt8Xt4DCQjbZw",
  authDomain: "camping-checklist-app.firebaseapp.com",
  databaseURL: "https://camping-checklist-app-default-rtdb.firebaseio.com",
  projectId: "camping-checklist-app",
  storageBucket: "camping-checklist-app.appspot.com",
  messagingSenderId: "119283648392",
  appId: "1:119283648392:web:a4c755e6d124391821dc3d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;