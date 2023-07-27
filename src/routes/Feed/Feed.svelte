<script lang="ts">
  import Grid4By4 from "$components/Grid4By4.svelte";
  import PostCard from "$components/PostCard.svelte";
  import posts from "$lib/posts";
  import NewPostButton from "$components/NewPostButton.svelte";
  import LoadingSpinner from "$components/LoadingSpinner.svelte";
  import type { Post } from "$lib/types";
  import blankPost from "$lib/blankPost";
  import onIntersect from "$lib/onIntersect";
  import { isEmpty } from "ramda";

  let isLoading = false;
  let fetchedPosts = [] as Post[];

  async function fetchNextPage() {
    if (isLoading) return;
    isLoading = true;

    try {
      const lastPost = fetchedPosts.at(-1) ?? blankPost();
      const newPosts = await posts(lastPost);
      fetchedPosts = [...fetchedPosts, ...newPosts];
    } catch (error) {
      throw error;
    }

    isLoading = false;
  }

  fetchNextPage();
</script>

<main class="p-4 bg-base-200">
  <Grid4By4>
    {#each fetchedPosts as post}
      <PostCard {post} />
    {/each}
  </Grid4By4>

  {#if isLoading && isEmpty(fetchedPosts)}
    <div class="grid place-items-center w-full h-screen">
      <LoadingSpinner />
    </div>
  {/if}

  <span class="block mb-12" use:onIntersect={fetchNextPage} />
</main>

<NewPostButton />
