import React from 'react';
import { fabric } from 'fabric';
import { shallow, useEditorUiStore, useFabricStore } from '@/stores';
import { MAJOR_ELEMENTS } from '@/constants';

interface Props {
  options: Nullable<fabric.IRectOptions>;
}

export const WhiteBoard = React.memo(function ReactElement({ options }: Props) {
  const [object, setObject] = React.useState<Nullable<fabric.Rect>>(null);
  const { whiteboardSize } = useEditorUiStore((state) => ({ whiteboardSize: state.whiteboardSize }), shallow);
  const { canvas, whiteboard, setWhiteboard } = useFabricStore(
    (state) => ({ canvas: state.canvas, whiteboard: state.whiteboard, setWhiteboard: state.setWhiteboard }),
    shallow,
  );
  const initFlag = React.useRef(false);

  React.useEffect(() => {
    if (canvas) {
      const center = canvas.getCenter();
      setWhiteboard({
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
    }
  }, [canvas]);

  React.useEffect(() => {
    if (!initFlag.current && canvas && whiteboard) {
      initFlag.current = true;
      const _object = new fabric.Rect(whiteboard);
      setObject(_object);
      canvas.add(_object);
      canvas.renderAll();
    }
  }, [whiteboard]);

  React.useEffect(() => {
    if (canvas && whiteboard && object) {
      debugger;
      object.setOptions(whiteboard);
      object.setCoords();
      canvas.renderAll();
    }
  }, [canvas, whiteboard, object]);

  React.useEffect(() => {
    if (object) {
      const update = () => {
        setWhiteboard(object.toObject());
      };
      object.on('moved', update);
      object.on('scaled', update);
      object.on('rotated', update);
      object.on('changed', update);
    }
  }, [setWhiteboard, object]);

  return <></>;
});
