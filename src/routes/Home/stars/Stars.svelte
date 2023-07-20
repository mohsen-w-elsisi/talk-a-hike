<script lang="ts">
  import { onMount } from "svelte";
  import drawSceneOn from "./drawSceneOn";
  import camfireImage from "$assets/campfire.png";

  let starSkyCanvas: HTMLCanvasElement;

  const drawSceneOnCanvas = () => drawSceneOn(starSkyCanvas);

  onMount(drawSceneOnCanvas);
</script>

<section class="bg-black w-full relative h-[200vw] sm:h-[100vw]">
  <canvas bind:this={starSkyCanvas} class="top-0 left-0 w-full h-full" />
  <img src={camfireImage} alt="" class="absolute bottom-0 left-1/2 -translate-x-1/2 z-10" />
</section>
