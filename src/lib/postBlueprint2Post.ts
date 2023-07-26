import { auth } from "./firebase";
import type { Post, PostBlueprint } from "./types";

export default function postBlueprint2Post(blueprint: PostBlueprint): Post {
  return {
    title: blueprint.title,
    discribtion: blueprint.discribtion,
    telephone: blueprint.telephone,
    website: blueprint.website,

    autherName: auth.currentUser.displayName,
    autherImageUrl: auth.currentUser.photoURL,

    likes: [],
    dislikes: [],
  };
}
