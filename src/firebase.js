import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDfO-yzG50UJo9Xi2zVjKL68D0bIcZXJ8s",
  authDomain: "darulifta-ahlesunnat.firebaseapp.com",
  databaseURL: "https://darulifta-ahlesunnat.firebaseio.com",
  projectId: "darulifta-ahlesunnat",
  storageBucket: "darulifta-ahlesunnat.appspot.com",
  messagingSenderId: "282206646331",
  appId: "1:282206646331:web:a7087558e9684f22a16c1e",
  measurementId: "G-TSKRPRBBXV",
};

const devConfig = {
  apiKey: "AIzaSyBFfSvAAwtYRvo0I6KBNUJCRqB425zfZq8",
  authDomain: "darulifta-prac.firebaseapp.com",
  databaseURL: "https://darulifta-prac.firebaseio.com",
  projectId: "darulifta-prac",
  storageBucket: "darulifta-prac.appspot.com",
  messagingSenderId: "187129122998",
  appId: "1:187129122998:web:0aa266358dbc7954591617",
  measurementId: "G-Y8688J3KRJ",
};
firebase.initializeApp(devConfig);

let db = firebase.database().ref();

export const addUser = (obj, branch) => {
  db.child("Brother/" + branch).push(obj);
};
export const updateUser = (obj, branch, key) => {
  db.child("Brother/" + branch + "/" + key).set(obj);
};
export const deleteUser = (obj, branch, key) => {
  db.child("Brother/" + branch + "/" + key).remove();
};

export const getUsers = async () => {};
