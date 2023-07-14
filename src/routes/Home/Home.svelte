<script>
  import FeatureCard from "./FeatureCard.svelte";

  import starsPhoto from "$assets/stars.jpg"

  import signIn from "$lib/signIn";

  import user from "$lib/user";
  import { push } from "svelte-spa-router";
  import Background from "./Background.svelte";
  import Stars from "./stars/Stars.svelte";

  // routes to feeds if logged in
  $: if ($user) push("#/feed");
</script>

<section class="hero min-h-screen bg-black">
  <Background />
  <div class="hero-content flex-col text-black">
    <h1 class="text-center text-4xl sm:text-5xl">Find Your Next Adventure</h1>

    <p class="sm:text-3xl text-2xl max-w-lg text-center">
      browse through people's reviews to find out where you wanna go next
    </p>

    <button class="btn btn-primary" on:click={signIn}>start now</button>
  </div>
</section>

<section class="flex flex-col items-center min-h-screen bg-black">
  <FeatureCard title="Discover">
    talk a hike let’s you discover places you’d absolutely love traveling to,
    but these aren’t boring places like luxury spas and hotels, not at all. Hear
    you will discover fun places like hikes up great mountain peaks or safaris
    through the deadliest of deserts., and so much more
  </FeatureCard>

  <FeatureCard title="share" indent>
    with talk a hike you can share your experiences about places you’ve gon to
    before! how’d your adventures go? were they fun? so what are you waiting
    for? recommend them with posts made with tools made expecially for talk
    about places, like stickin’ a pin on a google map
  </FeatureCard>

  <FeatureCard title="Focus">
    when you’re on talk a hike there is no you getting distracted from finding a
    place you wanna go to. this may be social media, but it’s just people
    talking about adventures, which mean that way skip all the naughty parts of
    social media, so no FOMO
  </FeatureCard>
</section>

<Stars />

<section class="min-h-screen grid place-items-center">testemonials 😜</section>

<section class="hero h-screen">
  <div class="hero-content flex-col">
    <h2 class="text-center text-4xl sm:text-5xl">aren't you convinced yet?</h2>
    <button class="btn btn-primary" on:click={signIn}>
      log in with google
    </button>
  </div>
</section>
