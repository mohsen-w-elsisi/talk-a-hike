<script lang="ts">
  import reviewsReference from "$lib/reviewsReference";
  import { getDocs, limit, query, where } from "firebase/firestore";
  import ReviewCard from "./ReviewCard.svelte";
  import { link } from "svelte-spa-router";

  const goodReviewsQuery = query(
    reviewsReference,
    where("starRating", ">=", 3),
    limit(3)
  );

  const goodReviews = getDocs(goodReviewsQuery);

  goodReviews.then((v) => console.log(v.docs));
</script>

{#await goodReviews then reviews}
  {#if reviews.docs}
    <section class="h-screen bg-secondary overflow-x-scroll grid snap-x snap-mandatory">
      <div
        class="grid grid-cols-3 px-4 py-[20vh] gap-4 w-[280vw]"
      >
        {#each reviews.docs as doc}
          <div style="block-size: 67vw; scroll-snap-align: center; scroll-snap-stop: always;">
            <ReviewCard review={doc.data()} />
          </div>
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
