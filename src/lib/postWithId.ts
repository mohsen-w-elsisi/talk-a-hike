import { docStore } from "sveltefire";
import { db } from "./firebase";
import type { Post } from "./types";

export default (id:string) => docStore<Post>(db, `posts/${id}`)