<script lang="ts">
  import blankPost from "$lib/blankPost";
  import thumbnailUrlFromTitle from "$lib/thumbnailUrlFromTitle";
  import { isNil, split } from "ramda";
  import { loc, push } from "svelte-spa-router";
  import idFromQueryString from "./idFromQueryString";
  import postWithId from "$lib/postWithId";
  import AutherByline from "$components/AutherByline.svelte";
  import PostDoesNotExist from "./PostDoesNotExist.svelte";
  import PostBanner from "./PostBanner.svelte";
  import ActionChips from "./ActionChips.svelte";
  import LoadingSpinner from "$components/LoadingSpinner.svelte";

  const postId = idFromQueryString($loc.querystring);

  if (isNil(postId)) push("#/feed");

  const postRequest = postWithId(postId);

  let { title, discribtion, autherName, autherImageUrl } = blankPost();

  postRequest.then(
    (post) => ({ title, discribtion, autherName, autherImageUrl } = post)
  );
</script>

{#await postRequest}
  <div class="grid place-items-center h-screen">
    <LoadingSpinner />
  </div>
{:then post}
  {#if post}
    <PostBanner {title} thumbnailUrlRequest={thumbnailUrlFromTitle(title)} />

    <div class="flex flex-col p-4 gap-4">
      <AutherByline {autherImageUrl} {autherName} />
      <ActionChips {post} {postId} />
      <div class="flex flex-col gap-2">
        {#each split("\n", discribtion) as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
    </div>
  {:else}
    <PostDoesNotExist />
  {/if}
{/await}
