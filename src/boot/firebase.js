import * as firebase from "firebase/app"

import "firebase/auth"

var firebaseConfig = {
  apiKey: "AIzaSyDydiIyHEi1Vr8ZtYQ4LVMbiGfzwttuYdU",
  authDomain: "multiplatform-todo-481f9.firebaseapp.com",
  databaseURL: "https://multiplatform-todo-481f9.firebaseio.com",
  projectId: "multiplatform-todo-481f9",
  storageBucket: "multiplatform-todo-481f9.appspot.com",
  messagingSenderId: "318953418303",
  appId: "1:318953418303:web:665266ee34ddca9f89928a",
  measurementId: "G-40D24F59QC"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()

export { firebaseAuth }
