<script lang="ts">
  import FlexableTextArea from "$components/FlexableTextArea.svelte";
  import { repeat } from "ramda";
  import uploadNewReview from "./uploadNewReview";

  let reviewText: string;
  let starRating: number;

  function uploadNewReviewWithThisReviewText() {
    uploadNewReview(reviewText, starRating);
  }
</script>

<form
  class="form-control gap-4 p-4"
  on:submit={uploadNewReviewWithThisReviewText}
>
  <h1 class="pl-2 text-5xl mb-4">New Review</h1>
  <div class="rating pl-2">
    <p>rate your experience:</p>
    {#each repeat(null, 5) as _, i}
      <input
        type="radio"
        value={i + 1}
        bind:group={starRating}
        name="star-rataing"
        class="mask mask-star"
        required
      />
    {/each}
  </div>

  <FlexableTextArea
    placeholder="tell us what you think"
    bind:value={reviewText}
  />

  <button class="btn btn-primary"> submit review </button>
</form>
