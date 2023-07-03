import { userStore } from "sveltefire";
import { auth } from "./firebase";

export default userStore(auth)