<script lang="ts">
  import type { Post } from "$lib/types";
  import { link } from "svelte-spa-router";
  import thumbnailUrlFromTitle from "$lib/thumbnailUrlFromTitle";
  import { onMount } from "svelte";
  import {
    ifElse,
    isNil,
    isNotNil,
    pipe,
    prop,
    and,
    identity,
    gte,
    length,
    match,
    both,
    defaultTo,
  } from "ramda";

  export let post: Post;

  const { id, title, discribtion } = post;

  const thumbnailUrl = thumbnailUrlFromTitle(title);

  let artHeight: number;
  let aHeight: number;

  let card: HTMLAnchorElement;

  const secondNearestCard: () => HTMLElement | null = pipe(
    () => card,
    prop("nextElementSibling"),
    ifElse(isNil, () => null, pipe(prop("nextElementSibling"), defaultTo(null)))
  );

  function getSecondNumberFromTranslate(element) {
    const regex = /\d+/g;
    const translate = element.style.translate;
    const matches = translate.match(regex);
    if (matches && matches.length >= 2) {
      return parseInt(matches[1]);
    }
    return null;
  }

  const nextCardTranslaion = (verticalTranslation: number) =>
    aHeight - artHeight + (verticalTranslation || 0);

  function adjustBottomCardVerticalTransform() {
    if (card) {
      const nextCard = secondNearestCard();
      if (nextCard) {
        const verticalTranslation = getSecondNumberFromTranslate(card);

        const cardTranslation = nextCardTranslaion(verticalTranslation);

        nextCard.style.translate = `0 -${cardTranslation}px`;
      }
    }
  }

  thumbnailUrl.then(() => {
    setTimeout(adjustBottomCardVerticalTransform, 1000);
  });
</script>

<a href="/post?id={id}" use:link bind:clientHeight={aHeight} bind:this={card}>
  <article class="card bg-base-100 shadow-md" bind:clientHeight={artHeight}>
    {#await thumbnailUrl then url}
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
