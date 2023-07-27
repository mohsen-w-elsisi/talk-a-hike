<script lang="ts">
  import FlexableTextArea from "$components/FlexableTextArea.svelte";
  import Grid4By4 from "$components/Grid4By4.svelte";
  import uploadNewPost from "$lib/uploadNewPost";
  import { isEmpty, not } from "ramda";
  import FormHeaderArea from "./FormHeaderArea.svelte";
  import isValidPostTitle from "./isValidPostTitle";
  import InvalidPostAlert from "./InvalidPostAlert.svelte";
  import type { InvalidPostFormMap } from "$lib/types";
  import { pop } from "svelte-spa-router";
  import countryCodes from "$assets/countryCodes.json";

  let title = "";
  let discribtion = "";
  let website: string = null;
  let telephone: string = null;
  let imageUrl: string = "";

  let countryDialCode: string;
  let telephoneNumber: string;

  $: telephone = `${countryDialCode}${telephoneNumber}`;

  let showInvalidPostAlert: (invalidPostAlert: InvalidPostFormMap) => void;

  let submitButtonDisabled = false;

  async function uploadPostWithThisData() {
    submitButtonDisabled = true;

    let titleIsTaken = not(await isValidPostTitle(title));
    let noPhotoSelected = isEmpty(imageUrl);
    let noDetailsAdded = isEmpty(discribtion);

    showInvalidPostAlert({ titleIsTaken, noDetailsAdded, noPhotoSelected });

    if (titleIsTaken || noPhotoSelected || noDetailsAdded) {
      submitButtonDisabled = false;
      return;
    }

    await uploadNewPost({ title, discribtion, website, telephone, imageUrl });

    pop();
  }

  let bumpHeight: string;
</script>

<form on:submit|preventDefault={uploadPostWithThisData}>
  <FormHeaderArea bind:bumpHeight bind:title bind:image={imageUrl} />

  <div
    class="flex flex-col gap-4 p-4 sm:p-8"
    style="translate: 0 -{bumpHeight};"
  >
    <Grid4By4>
      <input
        type="url"
        class="input input-primary"
        placeholder="website url (optional)"
        bind:value={website}
      />

      <div class="join overflow-hidden">
        <select bind:value={countryDialCode} class="select select-primary join-item">
          <option value="+20">🇪🇬 +20</option>
          {#each countryCodes as { dial_code, emoji }}
            <option value={dial_code}>{emoji} {dial_code}</option>
          {/each}
        </select>
        <input
          type="tel"
          class="input input-primary join-item flex-1"
          placeholder="phone number (optional)"
          bind:value={telephoneNumber}
        />
      </div>
    </Grid4By4>

    <FlexableTextArea placeholder="details" bind:value={discribtion} />

    <button class="btn btn-primary" disabled={submitButtonDisabled}>
      upload post!
    </button>
  </div>
</form>

<InvalidPostAlert bind:triggerShow={showInvalidPostAlert} />
