import { when, gt, __, slice, pipe, length } from "ramda";

export default (x: number) => when(pipe(length, gt(x)), slice(0, x));
