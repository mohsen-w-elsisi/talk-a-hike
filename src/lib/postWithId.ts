import postRef from "./postRef";
import type { Post } from "./types";
import { getDoc } from "firebase/firestore";
import { andThen, pipe } from "ramda";

export default pipe(
  postRef,
  getDoc,
  andThen((doc) => doc.data() as Post)
);
