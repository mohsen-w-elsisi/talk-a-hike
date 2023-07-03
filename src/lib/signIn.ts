import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

export default function signIn() {
  signInWithPopup(auth, new GoogleAuthProvider());
}
