import { doc } from "firebase/firestore";
import { db } from "./firebase";
import { partial } from "ramda";
import type { Post } from "./types";

export default partial(doc<Post>, [db, "posts"]);
