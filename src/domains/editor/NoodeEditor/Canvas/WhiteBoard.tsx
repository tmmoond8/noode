import React from 'react';
import { fabric } from 'fabric';
import { shallow, useEditorUiStore, useFabricStore } from '@/stores';
import { MAJOR_ELEMENTS } from '@/constants';

export function WhiteBoard() {
  const [whiteBoard, setWhiteBoard] = React.useState<fabric.Rect>();
  const { canvas } = useFabricStore((state) => ({ canvas: state.canvas }), shallow);
  const { whiteboardSize } = useEditorUiStore((state) => ({ whiteboardSize: state.whiteboardSize }), shallow);

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
      width: whiteboardSize.width,
      height: whiteboardSize.height,
      fill: '#ffffff',
      selectable: false,
      type: 'Rect',
      name: MAJOR_ELEMENTS.WhiteBoard,
    });
    canvas.add(whiteBoard);
    setWhiteBoard(whiteBoard);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas]);

  React.useEffect(() => {
    if (!canvas) {
      return;
    }
    // whiteBoard.set('width', whiteboardSize.width);
    // whiteBoard.set('height', whiteboardSize.height);
    // whiteBoard.setCoords();
    // canvas.renderAll();
  }, [whiteboardSize]);

  return null;
}
