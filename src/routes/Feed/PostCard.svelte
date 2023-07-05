<script lang="ts">
  import type { Post } from "$lib/types";

  export let post: Post;
  
  const { title, discribtion } = post;
</script>

<article class="card bg-base-200 shadow-md">
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{discribtion}</p>
  </div>
</article>
