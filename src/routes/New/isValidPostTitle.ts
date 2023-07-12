import type { QuerySnapshot } from "firebase/firestore";
import postWithTitle from "$lib/postWithTitle";
import { andThen, pipe, prop } from "ramda";

export default pipe(
  postWithTitle,
  andThen(prop<QuerySnapshot, "empty">("empty"))
);
