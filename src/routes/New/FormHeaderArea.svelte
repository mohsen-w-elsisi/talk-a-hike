<script lang="ts">
  import ImageUploader from "./ImageUploader.svelte";

  export let title: string = "";
  export let image: string = "";

  const INITIAL_BUMP_HEIGHT = "3.5rem";

  export let bumpHeight = INITIAL_BUMP_HEIGHT;

  let textArea: HTMLTextAreaElement;

  function auto_grow() {
    textArea.style.height = INITIAL_BUMP_HEIGHT;
    textArea.style.height = textArea.scrollHeight + "px";

    bumpHeight = textArea.style.height;
  }
</script>

<div class="flex flex-col">
  <ImageUploader bind:selectedImage={image} />
</div>

<textarea
  class="h-14 -translate-y-full transition-none p-2 text-5xl text-neutral-300 w-full"
  placeholder="place name"
  bind:this={textArea}
  bind:value={title}
  on:input={auto_grow}
/>

<style>
  textarea {
    background-color: #0000;
    background-image: linear-gradient(#0000, #000a, black);
  }
  textarea:focus {
    outline: none;
  }
</style>
