<script>
  import FlexableTextArea from "$components/FlexableTextArea.svelte";
</script>

<main class="p-8">
  <h1 class="text-6xl">New Post</h1>
  <form class="form-control mt-8 gap-6" on:submit|preventDefault={() => null}>
    <input
      type="text"
      class="input input-lg input-primary"
      placeholder="place name"
    />
    <div class="grid gap-6 sm:gap-4 sm:grid-cols-2">
      <input type="url" class="input input-primary" placeholder="website url" />
      <input
        type="tel"
        class="input input-primary"
        placeholder="telephone number"
      />
    </div>
    <FlexableTextArea placeholder="details" />
  </form>
</main>
