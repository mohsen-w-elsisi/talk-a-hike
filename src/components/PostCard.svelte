<script lang="ts">
  import type { Post } from "$lib/types";
  import { link } from "svelte-spa-router";
  import thumbnailUrlFromTitle from "$lib/thumbnailUrlFromTitle";
  import SkelatonImage from "$components/SkelatonImage.svelte";
  import thumbsUpIcon from "$icons/thumbsUpIcon.svg";
  import thumbsDownIcon from "$icons/thumbsDownIcon.svg";
  import { length } from "ramda";

  export let post: Post;

  let show = true;

  const { id, title, likes, dislikes } = post;

  const thumbnailUrl = thumbnailUrlFromTitle(title);

  thumbnailUrl.catch(() => show = false)
</script>

{#if show}
  <a href="/post?id={id}" use:link class="card bg-base-100 shadow-md max-h-96">
    <figure class="flex-[4]">
      {#await thumbnailUrl}
        <SkelatonImage />
      {:then url}
        <img src={url} alt="" />
      {/await}
    </figure>
  
    <div class="card-body flex-[1] overflow-hidden">
      <h2 class="card-title">{title}</h2>
  
      <div class="modal-action">
        <span class="badge bg-base-200 gap-1.5">
          <img
            src={thumbsUpIcon}
            class="invert max-h-full scale-90"
            alt="likes"
          />
          <span>{likes ? length(likes) : 0}</span>
        </span>
  
        <span class="badge bg-base-200 gap-1.5">
          <img
            src={thumbsDownIcon}
            class="invert max-h-full scale-90"
            alt="dislikes"
          />
          <span>{dislikes ? length(dislikes) : 0}</span>
        </span>
      </div>
    </div>
  </a>
{/if}
