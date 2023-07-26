<script lang="ts">
  import type { Post } from "$lib/types";
  import { link } from "svelte-spa-router";
  import thumbnailUrlFromTitle from "$lib/thumbnailUrlFromTitle";
  import truncateBy from "$lib/truncateBy";
  import SkelatonImage from "$components/SkelatonImage.svelte";

  export let post: Post;

  const { id, title, discribtion } = post;

  const thumbnailUrl = thumbnailUrlFromTitle(title);
</script>

<a href="/post?id={id}" use:link class="card bg-base-100 shadow-md max-h-96">
  <figure class="flex-[4]">
    {#await thumbnailUrl}
      <SkelatonImage />
    {:then url}
      <img src={url} alt="" class="" />
    {/await}
  </figure>

  <div class="card-body flex-[1] overflow-hidden">
    <h2 class="card-title">{title}</h2>
    <p>{truncateBy(10)(discribtion)}</p>
  </div>
</a>
