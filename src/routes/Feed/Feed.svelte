<script lang="ts">
  import Grid4By4 from "$components/Grid4By4.svelte";
  import PostCard from "./PostCard.svelte";
  import posts from "$lib/posts";
</script>

<main class="p-4">
  <Grid4By4>
    {#each $posts as post}
      <PostCard {post} />
    {/each}
  </Grid4By4>
</main>
