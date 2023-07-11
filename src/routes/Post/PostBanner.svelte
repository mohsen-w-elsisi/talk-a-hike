<script lang="ts">
  export let title: string;
  export let thumbnailUrl: string;
</script>

<section class="flex flex-col">
  <span
    class="post-banner-image flex flex-col justify-end"
    style="background-image: url({thumbnailUrl});"
  >
    <h1 class="dynamic-post-title">
      {title}
    </h1>
  </span>
</section>
