<script lang="ts">
  export let value: string = "";
  export let placeholder: string

  let textArea: HTMLTextAreaElement;

  function auto_grow() {
    textArea.style.height = "3rem";
    textArea.style.height = textArea.scrollHeight + "px";
  }
</script>

<textarea
  class="textarea textarea-primary h-12"
  {placeholder}
  bind:this={textArea}
  bind:value
  on:input={auto_grow}
/>
