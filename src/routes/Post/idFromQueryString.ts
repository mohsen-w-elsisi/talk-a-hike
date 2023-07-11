import { pipe, prop, split } from "ramda";

export default pipe(
    split("id="),
    prop(-1)
)