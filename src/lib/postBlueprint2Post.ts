import { auth } from "./firebase";
import type { Post, PostBlueprint } from "./types";

export default function postBlueprint2Post(blueprint: PostBlueprint): Post {
  return {
    ...blueprint,
    autherName: auth.currentUser.displayName,
    autherImageUrl: auth.currentUser.photoURL,

    location: null,
  };
}
