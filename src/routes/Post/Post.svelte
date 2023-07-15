<script lang="ts">
  import Grid4By4 from "$components/Grid4By4.svelte";
  import blankPost from "$lib/blankPost";
  import thumbnailUrlFromTitle from "$lib/thumbnailUrlFromTitle";
  import { isNil } from "ramda";
  import { loc, push } from "svelte-spa-router";
  import phoneIcon from "$icons/phoneIcon.svg";
  import websiteIcon from "$icons/websiteIcon.svg";
  import idFromQueryString from "./idFromQueryString";
  import postWithId from "$lib/postWithId";
  import AutherByline from "$components/AutherByline.svelte";
  import ActionTile from "./ActionTile.svelte";
  import PostDoesNotExist from "./PostDoesNotExist.svelte";
  import PostBanner from "./PostBanner.svelte";

  const postId = idFromQueryString($loc.querystring);

  if (isNil(postId)) push("#/feed");

  const post = postWithId(postId);

  let { title, discribtion, telephone, website, autherName, autherImageUrl } =
    blankPost();

  $: ({ title, discribtion, telephone, website, autherName, autherImageUrl } =
    $post ?? blankPost());
</script>

{#if $post}
  {#await thumbnailUrlFromTitle(title) then thumbnailUrl}
    <PostBanner {title} {thumbnailUrl} />
  {/await}

  <div class="flex flex-col p-4 gap-4">
    <AutherByline {autherImageUrl} {autherName} />

    <Grid4By4>
      {#if telephone}
        <ActionTile
          href="tel+{telephone}"
          title="phone number"
          icon={phoneIcon}
          value="call"
          desc={telephone}
        />
      {/if}

      {#if website}
        <ActionTile
          href={website}
          title="website"
          icon={websiteIcon}
          value="browse"
          desc={website}
        />
      {/if}
    </Grid4By4>

    <p class="px-1">{discribtion}</p>
  </div>
{:else}
  <PostDoesNotExist />
{/if}
