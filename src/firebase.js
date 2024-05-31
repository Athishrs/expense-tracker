import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBUoOkxamKQPsGyhnOtqo_zxXxtd7NFRxk",
    authDomain: "expensetracker-e83a8.firebaseapp.com",
    databaseURL: "https://expensetracker-e83a8-default-rtdb.firebaseio.com",
    projectId: "expensetracker-e83a8",
    storageBucket: "expensetracker-e83a8.appspot.com",
    messagingSenderId: "1017061530049",
    appId: "1:1017061530049:web:f0d4fc693ab013cb02b740"
  }; 

  const app = firebase.initializeApp(firebaseConfig);

  export const db=firebase.firestore(); 