import { collectionStore } from "sveltefire";
import { db } from "./firebase";
import type { Post } from "./types";

export default collectionStore<Post>(db, "posts");
