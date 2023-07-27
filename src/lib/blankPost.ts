import type { Post } from "./types";
import { Timestamp } from "firebase/firestore";

export default function blankPost(): Post {
  return {
    id: null,

    title: "",
    discribtion: "",

    website: null,
    telephone: null,

    autherName: "",
    autherImageUrl: "",

    likes: [],
    dislikes: [],

    createdAt: Timestamp.now(),
  };
}
