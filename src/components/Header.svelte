<script lang="ts">
  import newScrollMoniter from "$lib/newScrollMoniter";
  import whenScreenIsSmall from "$lib/whenScreenIsSmall";
  import { ifElse, not, pipe } from "ramda";
  import { onMount } from "svelte";

  import { loc } from "svelte-spa-router";

  import logo from "$assets/logo.svg";
  import { fly } from "svelte/transition";
  import ProfileDropdown from "./ProfileDropdown.svelte";

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

  let height = 0;
</script>

{#if not(hidden)}
  <header
    class="navbar fixed z-30 top-0 bg-primary shadow-md duration-300 h-16"
    class:shadow-none={backgroundHidden}
    bind:clientHeight={height}
    transition:fly={{ duration: 300, y: -height }}
  >
    <img
      src={logo}
      alt=""
      class="avatar h-full rounded-full aspect-square mr-3"
    />

    <h1 class="mr-auto">Talk A Hike</h1>

    <ProfileDropdown />
  </header>
{/if}

<hr class="h-16" />
