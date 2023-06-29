import { fabric } from 'fabric';
import { MAJOR_ELEMENTS } from '@/constants';

export function resizeCanvas(canvas: fabric.Canvas, newWidth: number, newHeight: number) {
  // 캔버스의 현재 크기를 가져옵니다
  const oldWidth = canvas.width;
  const oldHeight = canvas.height;
  if (!canvas.setDimensions) {
    return;
  }

  debugger;
  // 캔버스의 크기를 변경합니다
  try {
    canvas.setDimensions({ width: newWidth, height: newHeight });
  } catch (error) {
    console.log('error', error);
    return;
  }

  // 캔버스 컨테이너의 크기를 변경합니다
  let container = (canvas as any).lowerCanvasEl.parentNode;
  container.style.width = `${newWidth}px`;
  container.style.height = `${newHeight}px`;

  if (!oldWidth || !oldHeight) {
    canvas.renderAll();
    return;
  }

  // 캔버스에 있는 모든 객체를 새로운 크기에 맞게 조정합니다
  const deltaX = (newWidth - oldWidth) / 2;
  const deltaY = (newHeight - oldHeight) / 2;
  const scaleX = newWidth / oldWidth;
  const scaleY = newHeight / oldHeight;

  canvas.forEachObject(function (object) {
    switch (object.name) {
      case MAJOR_ELEMENTS.WhiteBoard: {
        object.left = scaleX * (object.left ?? 0);
        object.top = scaleY * (object.top ?? 0);
        object.setCoords();
        return;
      }
      default: {
        object.left = (object.left ?? 0) + deltaX;
        object.top = (object.top ?? 0) + deltaY;
        object.setCoords();
        return;
      }
    }
  });

  // 변경사항을 적용합니다
  canvas.renderAll();
}
