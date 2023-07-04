<script lang="ts">
  import signIn from "$lib/signIn";
  import user from "$lib/user";
  import { User } from "sveltefire";

  import newScrollMoniter from "$lib/newScrollMoniter";
  import whenScreenIsSmall from "$lib/whenScreenIsSmall";
  import { ifElse, pipe } from "ramda";
  import { onMount } from "svelte";
  import { auth } from "$lib/firebase";
  import signOut from "$lib/signOut";

  let hidden = false;

  const hide = () => (hidden = true);
  const show = () => (hidden = false);

  const didScrollUp = newScrollMoniter();

  const handleVisibillaty = whenScreenIsSmall(ifElse(didScrollUp, show, hide));

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
</script>

<header
  class="navbar sticky z-30 top-0 bg-base-100 shadow-md duration-300 h-16"
  class:-translate-y-full={hidden}
  class:bg-opacity-0={backgroundHidden}
  class:shadow-none={backgroundHidden}
>
  <h1 class="btn btn-ghost mr-auto">Talk A Hike</h1>

  <User {auth} let:user>
    <details class="dropdown dropdown-end h-full">
      <summary>
        <img src={user.photoURL} alt="" class="rounded-full h-12" />
      </summary>
      <ul class="p-2 shadow dropdown-content bg-base-100 rounded-box w-max">
        <button class="btn btn-error" on:click={signOut}>sign out</button>
      </ul>
    </details>

    <button slot="signedOut" class="btn btn-ghost" on:click={signIn}>
      sign up
    </button>
  </User>
</header>

<style>
  details > summary {
    list-style: none;
  }
  details > summary::-webkit-details-marker {
    display: none;
  }
</style>
