
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotesai-1b58e.firebaseapp.com",
  projectId: "examnotesai-1b58e",
  storageBucket: "examnotesai-1b58e.firebasestorage.app",
  messagingSenderId: "797066656441",
  appId: "1:797066656441:web:ff35847797ac3db5cd7968"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}
