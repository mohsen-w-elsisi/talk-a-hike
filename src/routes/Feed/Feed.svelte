<script lang="ts">
  import { db } from "$lib/firebase";
  import type { Post } from "$lib/types";
  import { collectionStore } from "sveltefire";

  const posts = collectionStore<Post>(db, "posts");
</script>

<main class="p-4">
    {#each $posts as post}
      <article class="card bg-base-200 shadow-md">
        <div class="card-body">
          <h2 class="card-title">{post.title}</h2>
          <p>{post.discribtion}</p>
        </div>
      </article>
    {/each}
</main>
