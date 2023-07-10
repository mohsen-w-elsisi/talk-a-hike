import type { GeoPoint } from "firebase/firestore";

export interface Post {
  id: string?;

  title: string;
  discribtion: string;

  autherName: string;
  autherImageUrl: string;

  telephone: string;
  website: string;
}

export interface PostBlueprint {
  title: string;
  discribtion: string;

  telephone: string;
  website: string;

  imageUrl: string;
}
