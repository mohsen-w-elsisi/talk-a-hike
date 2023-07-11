<script>
  import { link } from "svelte-spa-router";
  import newPostIcon from "$icons/newPostIcon.svg";
</script>

<a
  href="/new"
  use:link
  class="btn btn-primary btn-square btn-lg drop-shadow-lg fixed bottom-4 right-4"
>
  <img src={newPostIcon} alt="" />
</a>
