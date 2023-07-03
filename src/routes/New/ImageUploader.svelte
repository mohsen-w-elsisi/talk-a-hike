<script lang="ts">
  import { isNil, not } from "ramda";

  let selectedImage: string;
  let selectedFiles: FileList;

  $: if (not(isNil(selectedFiles))) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(selectedFiles[0]);
    fileReader.onload = (e) => (selectedImage = e.target.result as string);
  }
</script>

<input
  type="file"
  bind:files={selectedFiles}
  accept="image/png, image/jpeg"
  class="file-input file-input-primary"
/>

{#if selectedImage}
  <img src={selectedImage} class="rounded-lg" />
{/if}
