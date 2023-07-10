import { andThen, pipe } from "ramda";
import { getBytes } from "firebase/storage";
import thumbnailRefTo from "./thumbnailRefTo";

const blobFromArrayBuffer = (buffer: ArrayBuffer) => new Blob([buffer]);

export default pipe(
    pipe(thumbnailRefTo, getBytes),
    andThen(blobFromArrayBuffer),
    andThen(URL.createObjectURL)    
);
