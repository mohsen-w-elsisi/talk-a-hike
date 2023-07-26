<script lang="ts">
  import SkelatonImage from "$components/SkelatonImage.svelte";

  export let title: string;
  export let thumbnailUrlRequest: Promise<string>;
</script>

<section class="flex flex-col">
  {#await thumbnailUrlRequest}
    <span class="post-banner-image">
      <SkelatonImage />
    </span>
  {:then thumbnailUrl}
    <span
      class="post-banner-image flex flex-col justify-end"
      style="background-image: url({thumbnailUrl});"
    >
      <h1 class="dynamic-post-title">
        {title}
      </h1>
    </span>
  {/await}
</section>
