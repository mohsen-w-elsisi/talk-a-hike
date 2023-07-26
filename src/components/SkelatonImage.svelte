<span class="block w-full h-full" />

<style>
  @keyframes move {
    from {
      background-position: 0px;
    }

    to {
      background-position: 200px;
    }
  }

  span {
    animation-name: move;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    background: linear-gradient(
      to right,
      #4b5563 0%,
      #3e3d3d 45%,
      #4b5563 70%,
      #4b5563 100%
    );
  }
</style>
