import React from 'react';
import { fabric } from 'fabric';
import { shallow, useFabricStore } from '@/stores';
import { MAJOR_ELEMENTS } from '@/constants';

export function WhiteBoard() {
  const { canvas } = useFabricStore((state) => ({ canvas: state.canvas }), shallow);

  React.useEffect(() => {
    if (!canvas) {
      return;
    }
    const center = canvas.getCenter();

    const whiteBoard = new fabric.Rect({
      top: center.top,
      left: center.left,
      originX: 'center',
      originY: 'center',
      width: 400,
      height: 400,
      fill: '#ffffff',
      selectable: false,
      name: MAJOR_ELEMENTS.WhiteBoard,
    });
    canvas.add(whiteBoard);
  }, [canvas]);

  return null;
}
