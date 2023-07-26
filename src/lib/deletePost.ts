import { deleteDoc } from "firebase/firestore";
import postRef from "./postRef";
import { pipe } from "ramda";

export default pipe(
  postRef, 
  deleteDoc
)