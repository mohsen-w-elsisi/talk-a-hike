<script>
  import { link } from "svelte-spa-router";
  import {fade} from "svelte/transition"
</script>

<div
  class="absolute top-0 right-0 left-0 h-screen flex flex-col justify-center items-center"
  in:fade={{duration: 0, delay: 1200}}
>
  <h1 class="text-center">this post does not exist</h1>
  <a href="/feed" use:link class="btn btn-link">return to feed</a>
</div>
