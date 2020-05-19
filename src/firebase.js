import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDfO-yzG50UJo9Xi2zVjKL68D0bIcZXJ8s",
  authDomain: "darulifta-ahlesunnat.firebaseapp.com",
  databaseURL: "https://darulifta-ahlesunnat.firebaseio.com",
  projectId: "darulifta-ahlesunnat",
  storageBucket: "darulifta-ahlesunnat.appspot.com",
  messagingSenderId: "282206646331",
  appId: "1:282206646331:web:a7087558e9684f22a16c1e",
  measurementId: "G-TSKRPRBBXV"
};

  firebase.initializeApp(firebaseConfig)


  let db = firebase.database().ref()

  export const  addUser = (obj)=>{
    db.child('Brother').push(obj) 
  }

  export const  getUsers = async ()=>{
  }