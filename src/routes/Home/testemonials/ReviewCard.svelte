<script lang="ts">
  import AutherByline from "$components/AutherByline.svelte";
  import type { Review } from "$lib/types";

  export let snapScrolling: Boolean;

  export let review: Review;

  const { text, autherName, autherImageUrl } = review;
</script>

<article class="card bg-base-100 h-content w-[100%] sm:h-full " class:snap-scrolling={snapScrolling}>
  <div class="card-body">
    <AutherByline {autherName} {autherImageUrl} />
    <p class="text-2xl mt-2 overflow-y-scroll">"{text}"</p>
  </div>
</article>

<style>
  article::-webkit-scrollbar, article *::-webkit-scrollbar {
    display: none
  }
  
  .snap-scrolling {
    @apply snap-center snap-always;
    block-size: 67vw;
  }
</style>
