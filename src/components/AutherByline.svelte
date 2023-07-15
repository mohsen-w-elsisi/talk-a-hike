<script lang="ts">
  export let autherImageUrl: string;
  export let autherName: string;
</script>

<section class="flex h-7 px-1 gap-2">
  <img src={autherImageUrl} alt="" class="rounded-full" />
  <p class="text-lg">by {autherName}</p>
</section>
