import { CollectionReference, collection } from "firebase/firestore";
import { db } from "./firebase";
import type { Review } from "./types";

export default  collection(db, "/reviews") as CollectionReference<Review>