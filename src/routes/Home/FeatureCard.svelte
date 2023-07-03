<script lang="ts">
  export let title: string;
  export let indent = false;
</script>

<article class="card max-w-xl {indent ? 'sm:ml-[35vw]' : 'sm:mr-[35vw]'}">
  <div class="card-body">
    <h2 class="card-title text-3xl">{title}</h2>
    <p>
      <slot />
    </p>
  </div>
</article>
