<script lang="ts">
  import Grid4By4 from "$components/Grid4By4.svelte";
  import blankPost from "$lib/blankPost";
  import { db } from "$lib/firebase";
  import thumbnailUrlFromTitle from "$lib/thumbnailUrlFromTitle";
  import type { Post } from "$lib/types";
  import { isNil, isNotNil } from "ramda";
  import { loc, push } from "svelte-spa-router";
  import { docStore } from "sveltefire";
  import phoneIcon from "$icons/phoneIcon.svg";
  import websiteIcon from "$icons/websiteIcon.svg";

  const postId = $loc.querystring.split("id=").at(-1);
  console.log(postId);

  if (isNil(postId)) push("#/feed");

  const post = docStore<Post>(db, `posts/${postId}`);

  let { title, discribtion, telephone, website, autherName, autherImageUrl } =
    blankPost();

  $: ({ title, discribtion, telephone, website, autherName, autherImageUrl } =
    $post ?? blankPost());
</script>

{#if isNotNil($post)}
  {#await thumbnailUrlFromTitle(title) then thumbnailUrl}
    <main>
      <section class="flex flex-col">
        <span
          class="sm:max-h-96 aspect-[4/3] bg-center bg-cover flex flex-col justify-end"
          style="background-image: url({thumbnailUrl});"
        >
          <h1 class="transition-none p-2 text-5xl text-neutral-300 w-full">
            {title}
          </h1>
        </span>
      </section>

      <div class="flex flex-col p-4 gap-4">
        <Grid4By4>
          {#if telephone}
            <a href="tel:+{telephone}" class="stat bg-primary rounded-md">
              <div class="stat-figure">
                <img src={phoneIcon} alt="" />
              </div>
              <p class="stat-title">phone number</p>
              <p class="stat-value">call</p>
              <p class="stat-desc">{telephone}</p>
            </a>
          {/if}

          {#if website}
            <a href={website} class="stat bg-primary rounded-md">
              <div class="stat-figure">
                <img src={websiteIcon} alt="" />
              </div>
              <p class="stat-title">website</p>
              <p class="stat-value">open</p>
              <p class="stat-desc">{website}</p>
            </a>
          {/if}
        </Grid4By4>

        <p class="p-1">{discribtion}</p>
      </div>
    </main>
  {/await}
{/if}

<style>
  h1 {
    background-color: #0000;
    background-image: linear-gradient(#0000, #000a, black);
  }
</style>
