import type { GeoPoint } from "firebase/firestore";

export interface Post {
  title: string;
  discribtion: string;

  autherName: string;
  autherImageUrl: string;

  telephone: string;
  website: string;
  location: GeoPoint;

  thumbnailUrl: string;
}

export interface PostBlueprint {
  title: string;
  discribtion: string;

  telephone: string;
  website: string;

  thumbnailUrl: string;
}
