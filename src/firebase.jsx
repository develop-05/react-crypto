import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebaseConfig from "./config/firebaseConfig";

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp); // Для авторизации
const db = getFirestore(firebaseApp); // Для использования Database

export { auth, db };
