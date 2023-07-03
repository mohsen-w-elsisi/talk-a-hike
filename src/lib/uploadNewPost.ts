import { curry, pipe } from "ramda";
import postBlueprint2Post from "./postBlueprint2Post";
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

const uploadPost = curry(addDoc)(collection(db, "posts"))

export default pipe(
    postBlueprint2Post,
    uploadPost
)

