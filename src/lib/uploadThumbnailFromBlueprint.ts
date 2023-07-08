import type { PostBlueprint } from "./types";
import { uploadBytes } from "firebase/storage";
import { andThen, pipe } from "ramda";
import thumbnailRefTo from "./thumbnailRefTo";

const fetchAsBlob = pipe(
  fetch,
  andThen((res) => res.blob())
);

export default async function uploadThumbnailFromBlueprint(
  blueprint: PostBlueprint
) {
  blueprint = { ...blueprint };

  const thumbnailData = await fetchAsBlob(blueprint.imageUrl);

  const storageRefrence = thumbnailRefTo(blueprint.title);

  uploadBytes(storageRefrence, thumbnailData);

  return blueprint;
}
