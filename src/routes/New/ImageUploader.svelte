<script lang="ts">
  import ImageIcon from "$icons/ImageIcon.svg";
  import { isNotNil } from "ramda";

  export let selectedImage: string = undefined;
  let selectedFiles: FileList;

  $: if (isNotNil(selectedFiles)) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(selectedFiles[0]);
    fileReader.onload = (e) => (selectedImage = e.target.result as string);
  }
</script>

<input
  type="file"
  id="img-upload"
  bind:files={selectedFiles}
  accept="image/png, image/jpeg"
  class="hidden"
/>

{#if selectedImage}
  <label
    for="img-upload"
    class="post-banner-image"
    style="background-image: url({selectedImage});"
  />
{:else}
  <label
    for="img-upload"
    class="w-full sm:aspect-[10/3] aspect-[4/3] grid place-items-center bg-gray-600"
  >
    <img src={ImageIcon} alt="" class="h-[70%]" />
  </label>
{/if}
