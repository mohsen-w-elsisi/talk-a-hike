<script lang="ts">
  import deletePost from "$lib/deletePost";
  import { auth } from "$lib/firebase";
  import type { Post } from "$lib/types";
  import { push } from "svelte-spa-router";
  import { userStore } from "sveltefire";
  import { dislikePost, likePost } from "$lib/like&dislikePost";
  import { defaultTo, includes, length, not, when } from "ramda";

  import phoneIcon from "$icons/phoneIcon.svg";
  import websiteIcon from "$icons/websiteIcon.svg";
  import shareIcon from "$icons/shareIcon.svg";
  import deleteIcon from "$icons/deleteIcon.svg";
  import thumbsDownIcon from "$icons/thumbsDownIcon.svg";
  import thumbsUpFilledIcon from "$icons/thumbsupFilledIcon.svg";
  import thumbsUpIcon from "$icons/thumbsUpIcon.svg";
  import thumbsDownFilledIcon from "$icons/thumbsDownFilledIcon.svg";

  export let post: Post;
  export let postId: string;

  const user = userStore(auth);

  const { title, website, telephone, autherImageUrl } = post;

  let { likes, dislikes } = post;

  likes = defaultTo([], likes);
  dislikes = defaultTo([], dislikes);

  let userLikedPost = includes($user?.uid, likes);
  let userDislikedPost = includes($user?.uid, dislikes);

  const addLike = () => {
    if (userLikedPost) return;
    likePost(postId);
    userLikedPost = true;
    likes = [...likes, $user.uid];
  };

  const addDislike = () => {
    if (userDislikedPost) return;
    dislikePost(postId);
    userDislikedPost = true;
    dislikes = [...dislikes, $user.uid];
  };

  const deleteThisPost = async () => {
    await deletePost(postId);
    push("#/feed");
  };

  const shareThisPost = () =>
    navigator.share({
      title,
      url: location.href,
    });
</script>

<div>
  {#if $user}
    <div class="join mr-1">
      <button class="chip join-item" on:click={addLike}>
        <img
          src={userLikedPost ? thumbsUpFilledIcon : thumbsUpIcon}
          class="h-full scale-90"
          alt=""
        />
        <span>{length(likes)}</span>
      </button>
  
      <button class="chip join-item" on:click={addDislike}>
        <img
          src={userDislikedPost ? thumbsDownFilledIcon : thumbsDownIcon}
          class="h-full scale-90"
          alt=""
        />
        <span>{length(dislikes)}</span>
      </button>
    </div>
  {/if}

  {#if navigator.share}
    <button on:click={shareThisPost} class="chip mr-1">
      <img src={shareIcon} class="h-full scale-90" alt="" />
      <span>share</span>
    </button>
  {/if}

  {#if telephone}
    <a href="tel:+{telephone}" class="chip mr-1">
      <img src={phoneIcon} class="h-full scale-90" alt="" />
      <span>Call</span>
    </a>
  {/if}

  {#if website}
    <a href={website} class="chip mr-1">
      <img src={websiteIcon} class="h-full scale-90" alt="" />
      <span>open website</span>
    </a>
  {/if}

  {#if autherImageUrl === $user?.photoURL}
    <button on:click={deleteThisPost} class="chip btn-error mr-1">
      <img src={deleteIcon} class="h-full scale-90" alt="" />
      <span>delete post</span>
    </button>
  {/if}
</div>

<style>
  .chip {
    @apply btn btn-sm btn-primary;
  }
</style>
