export default function newScrollMoniter() {
  let previousScrollPosition = 0;
  let nextScrollPosition = 0;

  function updatePreviousScrollPosition() {
    previousScrollPosition = nextScrollPosition;
    nextScrollPosition = scrollY;
  }

  addEventListener("scroll", updatePreviousScrollPosition);

  const didScrollUp = () => previousScrollPosition > scrollY;

  return didScrollUp;
}
