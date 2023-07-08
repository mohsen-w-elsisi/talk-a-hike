<script lang="ts">
  import FlexableTextArea from "$components/FlexableTextArea.svelte";
  import Grid4By4 from "$components/Grid4By4.svelte";
  import uploadNewPost from "$lib/uploadNewPost";
  import FormHeaderArea from "./FormHeaderArea.svelte";

  let title = "New Post";
  let discribtion = "";
  let website: string = null;
  let telephone: string = null;
  let thumbnailUrl: string = "";

  function uploadPostWithThisData() {
    uploadNewPost({ title, discribtion, website, telephone, thumbnailUrl });
  }

  let bumpHeight: string;
</script>

<form on:submit|preventDefault={uploadPostWithThisData}>
  <FormHeaderArea bind:bumpHeight bind:title bind:image={thumbnailUrl} />

  <div
    class="flex flex-col gap-4 p-4 sm:p-8"
    style="translate: 0 -{bumpHeight};"
  >
    <Grid4By4>
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
    </Grid4By4>

    <FlexableTextArea placeholder="details" bind:value={discribtion} />

    <button class="btn btn-primary">uplocad post!</button>
  </div>
</form>
