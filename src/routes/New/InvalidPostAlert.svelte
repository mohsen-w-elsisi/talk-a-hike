<script lang="ts">
  import type { InvalidPostFormMap } from "$lib/types";
  import { filter, identity, ifElse, isEmpty, keysIn, pipe } from "ramda";
  import { fly } from "svelte/transition";

  function alertMessageMap({
    titleIsTaken,
    noPhotoSelected,
    noDetailsAdded,
  }: InvalidPostFormMap) {
    return {
      "someone already talked about this place.": titleIsTaken,
      "you must select a photo of the place": noPhotoSelected,
      "you need to give us details about your adventure": noDetailsAdded,
    };
  }

  const alertMessageFor = pipe(
    alertMessageMap,
    filter(identity<boolean>),
    ifElse(
      isEmpty,
      () => null,
      pipe(keysIn, (arr) => arr[0])
    )
  );

  let message: string;
  let shouldDisplay = false;

  export function triggerShow(invalidPostAlert: InvalidPostFormMap) {
    message = alertMessageFor(invalidPostAlert);
    shouldDisplay = true;

    setTimeout(() => (shouldDisplay = false), 3000);
  }
</script>

{#if shouldDisplay && message}
  <div
    transition:fly={{ y: 200, duration: 400 }}
    class="fixed bottom-6 right-0 left-0"
  >
    <span class="alert alert-error mx-auto w-max">{message}.</span>
  </div>
{/if}
