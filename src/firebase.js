import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDHVvcQi1z--wOkPCsrhKS4YYPl9TMs5lI",
  authDomain: "pokedexreact.firebaseapp.com",
  projectId: "pokedexreact",
  storageBucket: "pokedexreact.appspot.com",
  messagingSenderId: "793438500060",
  appId: "1:793438500060:web:8139d539d7f699caebf019",
  measurementId: "G-38HL1Q8PTE"
})

export const auth = firebase.auth;

export default app;