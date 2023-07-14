export default (canvas: HTMLCanvasElement) => {
  canvas.height = canvas.clientHeight;
  canvas.width = canvas.clientWidth;
  return canvas;
};
