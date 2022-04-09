import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDlh0BezWnbDU25oXExqHHhkuzOUBXld_s',
  authDomain: 'list-products-cdfc9.firebaseapp.com',
  projectId: 'list-products-cdfc9',
  storageBucket: 'list-products-cdfc9.appspot.com',
  messagingSenderId: '770323781243',
  appId: '1:770323781243:web:d37ddbd5127af9d4a3f4de',
  measurementId: 'G-2RV1Y1XXTP'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()

export function RegisterUser ({ email, password }) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
    })
    .catch((error) => {
      console.error(error)
    })
}

export function LogIn ({ email, password }) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
    })
    .catch((error) => {
      console.error(error)
    })
}

export function OnAuthStateChanged () {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, user => {
      if (user) {
        resolve(user)
      } else {
        reject(new Error('non authorizated'))
      }
    })
  })
}
