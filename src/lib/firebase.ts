import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyABeEG4H2Wtg-mRKd6HtbOKNd9uxzdyPzU",
  authDomain: "talk-a-hike-m.firebaseapp.com",
  projectId: "talk-a-hike-m",
  storageBucket: "talk-a-hike-m.appspot.com",
  messagingSenderId: "251361445059",
  appId: "1:251361445059:web:cc17e128ccc46602eece76",
} as const;

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
