import type { RouteDefinition } from "svelte-spa-router";
import Home from "./Home/Home.svelte";
import Feed from "./Feed/Feed.svelte";
import New from "./New/New.svelte";
import Post from "./Post/Post.svelte";
import Review from "./Review/Review.svelte"

const routes: RouteDefinition = {
  "/": Home,
  "/feed": Feed,
  "/new": New,
  "/post": Post,
  "/review": Review
};

export default routes;
