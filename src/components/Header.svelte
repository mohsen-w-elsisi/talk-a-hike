<script lang="ts">
  import signIn from "$lib/signIn";
  import { User } from "sveltefire";

  import newScrollMoniter from "$lib/newScrollMoniter";
  import whenScreenIsSmall from "$lib/whenScreenIsSmall";
  import { ifElse, not, pipe, when } from "ramda";
  import { onMount } from "svelte";
  import { auth } from "$lib/firebase";
  import signOut from "$lib/signOut";

  import { link, loc } from "svelte-spa-router";

  import logo from "$assets/logo.svg";
  import { fly } from "svelte/transition";

  const isOnHomePage = () => $loc.location == "/";

  let hidden = isOnHomePage();
  $: hidden = $loc.location == "/";

  const hide = () => (hidden = true);
  const show = () => (hidden = false);

  const didScrollUp = newScrollMoniter();

  const handleVisibillaty = ifElse(
    isOnHomePage,
    hide,
    whenScreenIsSmall(ifElse(didScrollUp, show, hide))
  );

  let backgroundHidden = true;

  const hideBackground = () => (backgroundHidden = true);
  const showBackground = () => (backgroundHidden = false);

  const isAtTop = () => scrollY == 0;

  const handleBackgroundVisibillaty = ifElse(
    isAtTop,
    hideBackground,
    showBackground
  );

  const handleVisibillatystates = pipe(
    handleVisibillaty,
    handleBackgroundVisibillaty
  );

  onMount(() => addEventListener("scroll", handleVisibillatystates));

  let height = 0
</script>

{#if not(hidden)}
  <header
    class="navbar fixed z-30 top-0 bg-primary shadow-md duration-300 h-16"
    class:shadow-none={backgroundHidden}
    bind:clientHeight={height}
    transition:fly={{duration: 300, y: -height}}
  >
    <img
      src={logo}
      alt=""
      class="avatar h-full rounded-full aspect-square mr-3"
    />
    
    <h1 class="mr-auto">Talk A Hike</h1>

    <User {auth} let:user>
      <details class="dropdown dropdown-end h-full">
        <summary>
          <img src={user.photoURL} alt="" class="rounded-full h-12" />
        </summary>
        <ul class="p-2 shadow dropdown-content bg-base-100 rounded-box w-max flex flex-col gap-2">
          <a href="/review" use:link class="btn">review</a>
          <button class="btn btn-error" on:click={signOut}>sign out</button>
        </ul>
      </details>

      <button slot="signedOut" class="btn btn-ghost" on:click={signIn}>
        sign up
      </button>
    </User>
  </header>
{/if}

<hr class="h-16">

<style>
  details > summary {
    list-style: none;
  }
  details > summary::-webkit-details-marker {
    display: none;
  }
</style>
