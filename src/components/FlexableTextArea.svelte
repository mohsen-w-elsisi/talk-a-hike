<script lang="ts">
  export let value: string = "";
  export let placeholder: string;
  export let XLarge = false;

  let textArea: HTMLTextAreaElement;

  function auto_grow() {
    textArea.style.height = "3rem";
    textArea.style.height = textArea.scrollHeight + "px";
  }
</script>

<textarea
  class="textarea {XLarge ? 'text-6xl ' : 'textarea-primary'}  h-12"
  {placeholder}
  bind:this={textArea}
  bind:value
  on:input={auto_grow}
/>

<style>
  textarea::-webkit-scrollbar {
    display: none;
  }
</style>
