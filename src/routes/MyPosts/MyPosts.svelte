<script lang="ts">
  import Grid4By4 from "$components/Grid4By4.svelte";
  import LoadingSpinner from "$components/LoadingSpinner.svelte";
  import documentSnapshotToPost from "$lib/documentSnapshotToPost";
  import postsCollection from "$lib/postsCollection";
  import user from "$lib/user";
  import { getDocs, query, where } from "firebase/firestore";
  import { map } from "ramda";
  import PostCard from "$components/PostCard.svelte";
  import type { Post } from "$lib/types";

  let postsPromise: Promise<Post[]>;

  $: {
    let userPostsQuery = query(
      postsCollection,
      where("autherImageUrl", "==", $user ? $user.photoURL : null)
    );

    postsPromise = getDocs(userPostsQuery).then(({ docs }) =>
      map(documentSnapshotToPost, docs)
    );
  }
</script>

<main class="p-4 bg-base-200 min-h-screen">
  {#await postsPromise}
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
