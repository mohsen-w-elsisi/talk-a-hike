import type { RouteDefinition } from "svelte-spa-router";
import Home from "./Home/Home.svelte";
import Feed from "./Feed/Feed.svelte";
import New from "./New/New.svelte";

const routes: RouteDefinition = {
  "/": Home,
  "/feed": Feed,
  "/new": New,
};

export default routes;
