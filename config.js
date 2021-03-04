import * as firebase from 'firebase'
require('@firebase/firestore')

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNjcbgllePsfhCsSs0IBk-p57H3UYHnxo",
    authDomain: "project71-fdfb2.firebaseapp.com",
    projectId: "project71-fdfb2",
    storageBucket: "project71-fdfb2.appspot.com",
    messagingSenderId: "581386119609",
    appId: "1:581386119609:web:3a1f1f617929d35fcb6e68"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();