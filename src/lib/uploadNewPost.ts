import { andThen, curry, pipe } from "ramda";
import postBlueprint2Post from "./postBlueprint2Post";
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import { uploadBytes } from "firebase/storage";
import uploadThumbnailFromBlueprint from "./uploadThumbnailFromBlueprint";

const uploadPost = curry(addDoc)(collection(db, "posts"));

export default pipe(
  uploadThumbnailFromBlueprint,
  andThen(postBlueprint2Post),
  andThen(uploadPost)
);
