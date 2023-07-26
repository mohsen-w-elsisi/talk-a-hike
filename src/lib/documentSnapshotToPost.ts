import type { QueryDocumentSnapshot } from "firebase/firestore";
import type { Post } from "./types";

export default (doc: QueryDocumentSnapshot<Post>): Post => ({
  id: doc.id,
  ...doc.data(),
});
