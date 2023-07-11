<script lang="ts">
  export let href: string;
  export let icon: string;
  export let title: string;
  export let value: string;
  export let desc: string;
</script>

<a {href} class="stat bg-primary rounded-md">
  <div class="stat-figure">
    <img src={icon} alt="" />
  </div>
  <p class="stat-title">{title}</p>
  <p class="stat-value">{value}</p>
  <p class="stat-desc">{desc}</p>
</a>
