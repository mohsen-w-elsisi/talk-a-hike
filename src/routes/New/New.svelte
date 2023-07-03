<script lang="ts">
  import FlexableTextArea from "$components/FlexableTextArea.svelte";
  import uploadNewPost from "$lib/uploadNewPost";
  import ImageUploader from "./ImageUploader.svelte";

  let title = "";
  let discribtion = "";
  let website: string = null;
  let telephone: string= null;

  function uploadPostWithThisData() {
    uploadNewPost({ title, discribtion, website, telephone });
  }
</script>

<main class="p-8">
  <h1 class="text-6xl">New Post</h1>
  <form
    class="form-control mt-8 gap-6"
    on:submit|preventDefault={uploadPostWithThisData}
  >
    <input
      type="text"
      class="input input-lg input-primary"
      placeholder="place name"
      bind:value={title}
    />
    <ImageUploader />
    <div class="grid gap-6 sm:gap-4 sm:grid-cols-2">
      <input
        type="url"
        class="input input-primary"
        placeholder="website url"
        bind:value={website}
      />
      <input
        type="tel"
        class="input input-primary"
        placeholder="telephone number"
        bind:value={telephone}
      />
    </div>
    <FlexableTextArea placeholder="details" bind:value={discribtion} />
    <button class="btn btn-primary">uplocad post!</button>
  </form>
</main>
