<script lang="ts">
  import { onMount } from "svelte";
  import drawSceneOn from "./drawSceneOn";

  let starSkyCanvas: HTMLCanvasElement;

  const drawSceneOnCanvas = () => drawSceneOn(starSkyCanvas)

  onMount(drawSceneOnCanvas)
</script>

<section class="flex flex-col bg-black">
    <canvas bind:this={starSkyCanvas} class="h-[50vh]" />
</section>
