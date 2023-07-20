import { forEach, when, prop } from "ramda";

export default function (node: HTMLElement, callback: (n: HTMLElement) => any) {
  const EntryIsIntersecting = prop("isIntersecting") as (
    e: IntersectionObserverEntry
  ) => boolean;

  const fireCallbackIfEntryIntersects = when(
    EntryIsIntersecting, () => callback(node)
  );

  const observer = new IntersectionObserver(
    forEach(fireCallbackIfEntryIntersects) as IntersectionObserverCallback
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
