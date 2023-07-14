import { randomNumberLessThan } from "$lib/randomNumberLessThan";
import type { Star } from "$lib/types";
import { pipe } from "ramda";
import {
  STAR_HUE,
  STAR_LIGHTNESS_LEVELS,
  STAR_MAXIMUM_LIGHTNESS,
  STAR_SATURATION,
  STAR_SIZE,
} from "./starConfg";

function HSLStringOfLightness(opacity: number) {
  return `hsl(${STAR_HUE}, ${STAR_SATURATION}%, ${opacity}%)`;
}

function LightnessFromLightnessyLevel(opacityLevel: number) {
  return (STAR_MAXIMUM_LIGHTNESS / STAR_LIGHTNESS_LEVELS) * opacityLevel;
}

function generateLightnessLevel() {
  return randomNumberLessThan(STAR_LIGHTNESS_LEVELS);
}

const starColorWithRandomLightness = pipe(
  generateLightnessLevel,
  LightnessFromLightnessyLevel,
  HSLStringOfLightness
);

export default (context: CanvasRenderingContext2D, star: Star) => {
  context.fillStyle = starColorWithRandomLightness();

  context.beginPath();
  context.arc(star.x, star.y, STAR_SIZE, 0, 2 * Math.PI);
  context.fill();
};
