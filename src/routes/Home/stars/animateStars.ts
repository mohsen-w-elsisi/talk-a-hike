import { curry, forEach } from "ramda";
import newStars from "./newStars";
import drawStar from "./drawStar";
import type { PositionConstraints } from "$lib/types";
import { STAR_COUNT } from "./starConfg";

export default (
  context: CanvasRenderingContext2D,
  constraints: PositionConstraints
) => {
  const stars = newStars(STAR_COUNT, constraints);

  const drawStarOnCanvas = curry(drawStar)(context);

  const renderStars = () => {
    forEach(drawStarOnCanvas, stars);
    requestAnimationFrame(renderStars);
  };

  renderStars();
};
