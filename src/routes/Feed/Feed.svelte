<script lang="ts">
  import Grid4By4 from "$components/Grid4By4.svelte";
  import PostCard from "$components/PostCard.svelte";
  import posts from "$lib/posts";
  import NewPostButton from "$components/NewPostButton.svelte";
  import LoadingSpinner from "$components/LoadingSpinner.svelte";
</script>

<main class="p-4 bg-base-200">
  {#await posts()}
    <div class="grid place-items-center h-screen w-full">
      <LoadingSpinner />
    </div>
  {:then posts}
    <Grid4By4>
      {#each posts as post}
        <PostCard {post} />
      {/each}
    </Grid4By4>
  {/await}
</main>

<NewPostButton />
