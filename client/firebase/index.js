import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "watchr-without-an-e.firebaseapp.com",
  projectId: "watchr-without-an-e",
  storageBucket: "watchr-without-an-e.appspot.com",
  databaseURL: "https://watchr-without-an-e-default-rtdb.europe-west1.firebasedatabase.app/",
  messagingSenderId: "187355270066",
  appId: "1:187355270066:web:411fc607f9c1e39f5532ab"
}

export default initializeApp(firebaseConfig)
