import { ConstraintsOfCanvas } from "./ConstraintsOfCanvas";
import animateStars from "./animateStars";
import context2DOf from "./context2DOf";
import prepCanvas from "./prepCanvas";

export default function drawSceneOn(canvas: HTMLCanvasElement) {
  prepCanvas(canvas);
  
  const context = context2DOf(canvas);

  animateStars(context, ConstraintsOfCanvas(canvas));
}
