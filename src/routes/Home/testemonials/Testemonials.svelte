<script lang="ts">
  import reviewsReference from "$lib/reviewsReference";
  import { getDocs, limit, query, where } from "firebase/firestore";
  import ReviewCard from "./ReviewCard.svelte";
  import { link } from "svelte-spa-router";
  import screenIsSmall from "$lib/screenIsSmall";

  const goodReviewsQuery = query(
    reviewsReference,
    where("starRating", ">=", 3),
    limit(3)
  );

  const goodReviews = getDocs(goodReviewsQuery);
</script>

{#await goodReviews then reviews}
  {#if reviews.docs}
    <section
      class="h-screen bg-secondary overflow-x-scroll grid snap-x snap-mandatory"
    >
      <div class="grid grid-cols-3 place-items-center px-4 py-[20vh] gap-4 w-[280vw] sm:w-screen">
        {#each reviews.docs as doc}
          <ReviewCard review={doc.data()} snapScrolling={screenIsSmall()} />
        {/each}
      </div>
    </section>
  {:else}
    <section class="flex flex-col items-center justify-center">
      <p>no reviews yet</p>
      <a href="/review" use:link class="link link-primary">leave a review</a>
    </section>
  {/if}
{/await}
