import { auth, db } from "$lib/firebase";
import type { Review } from "$lib/types";
import { addDoc, collection } from "firebase/firestore";

export default function uploadNewReview(text: string, starRating: number) {
  const review: Review = {
    text,
    starRating,
    autherName: auth.currentUser.displayName,
    autherImageUrl: auth.currentUser.photoURL,
  };

  addDoc(collection(db, "/reviews"), review);
}
