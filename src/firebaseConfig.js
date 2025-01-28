import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKHTlnt689GOcPqso0gBeLIYkkWd91d2g",
  authDomain: "ju-ecommerce.firebaseapp.com",
  projectId: "ju-ecommerce",
  storageBucket: "ju-ecommerce.firebasestorage.app",
  messagingSenderId: "14547091281",
  appId: "1:14547091281:web:667f61aa7b0597984e1d70"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta la base de datos Firestore
export const db = getFirestore(app);



