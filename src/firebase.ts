import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk25CZPFhLbcqTOowlZgtZhaR2ebmFqj8",
  authDomain: "chatpdf-f50da.firebaseapp.com",
  projectId: "chatpdf-f50da",
  storageBucket: "chatpdf-f50da.appspot.com",
  messagingSenderId: "105617041658",
  appId: "1:105617041658:web:73be3be7be99a0db66c143",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
