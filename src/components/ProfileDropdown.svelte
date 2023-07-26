<script lang="ts">
  import { auth } from "$lib/firebase";
  import signIn from "$lib/signIn";
  import signOut from "$lib/signOut";
  import { link } from "svelte-spa-router";
  import { User } from "sveltefire";

  let dropdownIsShown = false
  
  function hideDropdown() {
    dropdownIsShown = false
  }
</script>

<User {auth} let:user>
  <details class="dropdown dropdown-end h-full" bind:open={dropdownIsShown}>
    <summary>
      <img src={user.photoURL} alt="" class="rounded-full h-12" />
    </summary>
    <ul
      class="p-2 shadow dropdown-content bg-base-100 rounded-box w-max flex flex-col gap-2"
    >
      <a href="/review" use:link class="btn">
        <button on:click={hideDropdown}>review</button>
      </a>

      <button class="btn btn-error" on:click={signOut}>sign out</button>
    </ul>
  </details>

  <button slot="signedOut" class="btn btn-ghost" on:click={signIn}>
    sign up
  </button>
</User>

<style>
  details > summary {
    list-style: none;
  }
  details > summary::-webkit-details-marker {
    display: none;
  }
</style>
