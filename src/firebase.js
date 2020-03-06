import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCUR0a6Ig_wpWHjdkoEB1Enn3-vADLgxSo",
    authDomain: "usama-ed4c1.firebaseapp.com",
    databaseURL: "https://usama-ed4c1.firebaseio.com",
    projectId: "usama-ed4c1",
    storageBucket: "usama-ed4c1.appspot.com",
    messagingSenderId: "925402787817",
    appId: "1:925402787817:web:cffdfc603a2a064118a578",
    measurementId: "G-8QDWPYF0SD"
  };
  firebase.initializeApp(firebaseConfig)


  let db = firebase.database().ref()

  export const  addUser = (obj)=>{
    db.child('Brother').push(obj) 
  }

  export const  getUsers = async ()=>{
  }