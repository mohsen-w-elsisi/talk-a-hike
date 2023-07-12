import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";
import { partial, pipe } from "ramda";

const postCollection = collection(db, "posts");

const findByTitleFilter = partial(where, ["title", "=="]);

const postCollectionByTitleQuery = (title: string) =>
  query(postCollection, findByTitleFilter(title));

export default pipe(postCollectionByTitleQuery, getDocs);
