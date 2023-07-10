<script lang="ts">
  import type { Post } from "$lib/types";
  import thumbnailUrlFromTitle from "$lib/thumbnailUrlFromTitle";
  
  export let post: Post;

  const { id, title, discribtion } = post;
</script>

<a href="#/post?id={id}">
  <article class="card bg-base-100 shadow-md">
    {#await thumbnailUrlFromTitle(title) then url}
      <figure>
        <img src={url} alt="" />
      </figure>
    {/await}
  
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <p>{discribtion}</p>
    </div>
  </article>
</a>
