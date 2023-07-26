import { CollectionReference, collection } from "firebase/firestore";
import type { Post } from "./types";
import { db } from "./firebase";

export default collection(db, "posts") as CollectionReference<Post>;
