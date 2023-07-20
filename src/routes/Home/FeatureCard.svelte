<script lang="ts">
  import onIntersect from "$lib/onIntersect";
  
  export let title: string;
  export let indent = false;
</script>

<article
  class="card max-w-xl {indent ? 'sm:ml-[35vw]' : 'sm:mr-[35vw]'}"
  use:onIntersect={(node) => node.classList.add("show")}
>
  <div class="card-body">
    <h2 class="card-title text-3xl">{title}</h2>
    <p>
      <slot />
    </p>
  </div>
</article>

<style>
  article {
    @apply opacity-0 -translate-x-12 duration-200 delay-500;
  }

  :global(article.show) {
    @apply opacity-100 translate-x-0;
  }
</style>
