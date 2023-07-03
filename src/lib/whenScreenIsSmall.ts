import { curry, when } from "ramda";
import screenIsSmall from "./screenIsSmall";

export default curry(when)(screenIsSmall)