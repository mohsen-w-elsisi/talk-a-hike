<script lang="ts">
  import { storage } from "$lib/firebase";
  import type { Post } from "$lib/types";
  import { getBytes, ref } from "firebase/storage";

  export let post: Post;

  let image: HTMLImageElement;

  const { title, discribtion, thumbnailUrl } = post;

  const fetchthumbnail = () => getBytes(ref(storage, thumbnailUrl));

  const blobFromArrayBuffer = (buffer: ArrayBuffer) => new Blob([buffer]);

  fetchthumbnail()
    .then(blobFromArrayBuffer)
    .then(URL.createObjectURL)
    .then(url => image.src = url);
</script>

<article class="card bg-base-200 shadow-md">
  <figure>
    <img alt="" bind:this={image} />
  </figure>

  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{discribtion}</p>
  </div>
</article>
