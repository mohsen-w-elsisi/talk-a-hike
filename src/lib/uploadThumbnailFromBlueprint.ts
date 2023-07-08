import type { PostBlueprint } from "./types";
import { uploadBytes } from "firebase/storage";
import { andThen, pipe } from "ramda";
import thumbnailRefTo from "./thumbnailRefTo";

const fetchAsBlob = pipe(
  fetch,
  andThen((res) => res.blob()),
);

export default async function uploadThumbnailFromBlueprint(
  blueprint: PostBlueprint
) {
  blueprint = { ...blueprint };
  const { thumbnailUrl } = blueprint;

  const thumbnailData = await fetchAsBlob(thumbnailUrl);

  const storageRefrence = thumbnailRefTo(blueprint.title);

  const thumbnailStoragePath = await uploadBytes(
    storageRefrence,
    thumbnailData
  ).then((res) => res.ref.fullPath);

  blueprint.thumbnailUrl = thumbnailStoragePath;

  return blueprint;
}
