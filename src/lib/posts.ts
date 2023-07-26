import { getDocs } from "firebase/firestore";
import postsCollection from "./postsCollection";
import { prop, pipe, andThen, map } from "ramda";
import documentSnapshotToPost from "./documentSnapshotToPost";

export default pipe(
  () => postsCollection,
  getDocs,
  andThen(prop("docs")),
  andThen(map(documentSnapshotToPost))
);


