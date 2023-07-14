import type { PositionConstraints, Star } from "$lib/types";
import { map, partial, repeat } from "ramda";
import { randomNumberLessThan } from "$lib/randomNumberLessThan";

function newStar(contraints: PositionConstraints): Star {
  return {
    x: randomNumberLessThan(contraints.x),
    y: randomNumberLessThan(contraints.y),
  };
}

export default (count: number, constraints: PositionConstraints) => {
  const emptyArray = repeat(null, count);
  const newStarWithConstraints = partial(newStar, [constraints]);
  const stars = map(newStarWithConstraints, emptyArray);

  return stars;
};
