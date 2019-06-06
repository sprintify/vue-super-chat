import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAw0H8PEQY3BtGteGVAxzNXEzDq0CBMLCg",
  authDomain: "vuebulma.firebaseapp.com",
  databaseURL: "https://vuebulma.firebaseio.com",
  projectId: "vuebulma",
  storageBucket: "vuebulma.appspot.com",
  messagingSenderId: "499893421625",
  appId: "1:499893421625:web:8c4466edb28d420a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// db.settings({ timestampsInSnapshots: true });

export default db;
