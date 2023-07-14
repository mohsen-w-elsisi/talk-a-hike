import type { PositionConstraints } from "$lib/types";

export function ConstraintsOfCanvas(canvas: HTMLCanvasElement): PositionConstraints {
  return {
    x: canvas.clientWidth,
    y: canvas.clientHeight,
  };
}
