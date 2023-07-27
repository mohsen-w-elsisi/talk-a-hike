import { getDocs, limit, orderBy, query, startAfter } from "firebase/firestore";
import postsCollection from "./postsCollection";
import { prop, pipe, andThen, map } from "ramda";
import documentSnapshotToPost from "./documentSnapshotToPost";
import type { Post } from "./types";

const paginatedPostPageNumber = (lastPost: Post) =>
  query(
    postsCollection,
    orderBy("createdAt", "desc"),
    limit(5),
    startAfter(lastPost.createdAt)
  );

export default pipe(
  paginatedPostPageNumber,
  getDocs,
  andThen(prop("docs")),
  andThen(map(documentSnapshotToPost))
);
