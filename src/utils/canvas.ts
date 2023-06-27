import { fabric } from 'fabric';

export function resizeCanvas(canvas: fabric.Canvas, newWidth: number, newHeight: number) {
  // 캔버스의 현재 크기를 가져옵니다
  const oldWidth = canvas.width;
  const oldHeight = canvas.height;

  // 캔버스의 크기를 변경합니다
  canvas.setDimensions({ width: newWidth, height: newHeight });

  // 캔버스 컨테이너의 크기를 변경합니다
  let container = (canvas as any).lowerCanvasEl.parentNode;
  container.style.width = `${newWidth}px`;
  container.style.height = `${newHeight}px`;

  console.log('container', container);

  if (!oldWidth || !oldHeight) {
    canvas.renderAll();
    return;
  }

  // 캔버스에 있는 모든 객체를 새로운 크기에 맞게 조정합니다
  let scaleX = newWidth / oldWidth;
  let scaleY = newHeight / oldHeight;

  canvas.forEachObject(function (object) {
    // object.scaleX = scaleX * (object.scaleX ?? 1);
    // object.scaleY = scaleY * (object.scaleY ?? 1);
    console.log('object', object);
    object.left = scaleX * (object.left ?? 0);
    object.top = scaleY * (object.top ?? 0);
    object.setCoords();
  });

  // 변경사항을 적용합니다
  canvas.renderAll();
}
