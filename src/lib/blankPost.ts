import type { identity } from "ramda";
import type { Post } from "./types";

export default function blankPost(): Post {
  return {
    id: null,

    title: "",
    discribtion: "",

    website: null,
    telephone: null,

    autherName: "",
    autherImageUrl: "",
  };
}
