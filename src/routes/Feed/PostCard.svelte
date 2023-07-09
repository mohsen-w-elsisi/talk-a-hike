<script lang="ts">
  import thumbnailRefTo from "$lib/thumbnailRefTo";
  import type { Post } from "$lib/types";
  import { getBytes } from "firebase/storage";
  import { andThen, pipe } from "ramda";

  export let post: Post;

  const { title, discribtion } = post;

  const fetchthumbnail = pipe(
    () => title,
    thumbnailRefTo,
    getBytes,
  );

  const blobFromArrayBuffer = (buffer: ArrayBuffer) => new Blob([buffer]);

  const imageSrcUrl = pipe(
    fetchthumbnail,
    andThen(blobFromArrayBuffer),
    andThen(URL.createObjectURL)
  );
</script>

<article class="card bg-base-100 shadow-md">
  {#await imageSrcUrl() then url}
    <figure>
      <img src={url} alt="" />
    </figure>
  {/await}

  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{discribtion}</p>
  </div>
</article>
