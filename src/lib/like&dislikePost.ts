import { updateDoc } from "firebase/firestore";
import { auth } from "./firebase";
import postRef from "./postRef";
import postWithId from "./postWithId";
import { includes } from "ramda";

export const likePost = async (postId: string) => {
  const postReference = postRef(postId);

  const preExistingLikes = (await postWithId(postId)).likes ?? [];

  if (includes(auth.currentUser.uid, preExistingLikes)) return;

  updateDoc(postReference, {
    likes: [...preExistingLikes, auth.currentUser.uid],
  });
};

export const dislikePost = async (postId: string) => {
  const postReference = postRef(postId);

  const preExistingDislikes = (await postWithId(postId)).dislikes ?? [];

  if (includes(auth.currentUser.uid, preExistingDislikes)) return;

  updateDoc(postReference, {
    dislikes: [...preExistingDislikes, auth.currentUser.uid],
  });
};
