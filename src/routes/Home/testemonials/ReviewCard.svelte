<script lang="ts">
  import AutherByline from "$components/AutherByline.svelte";
  import type { Review } from "$lib/types";

  export let review: Review;

  const { text, autherName, autherImageUrl } = review;
</script>

<article class="card bg-base-100 h-full">
  <div class="card-body">
    <AutherByline {autherName} {autherImageUrl} />
    <p class="text-2xl mt-2 overflow-y-scroll">"{text}"</p>
  </div>
</article>
