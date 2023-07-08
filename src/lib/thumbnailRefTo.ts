import { ref } from "firebase/storage";
import { storage } from "./firebase";

export default (title: string) => ref(storage, `thumbnails/${title}`);
