import React from 'react';
import { fabric } from 'fabric';
import { shallow, useFabricStore } from '@/stores';
import { ObjectType, OBJECT_TYPE } from '@/constants';

interface IObjectProps {
  uuid: string;
  options: fabric.IObjectOptions;
  canvas: fabric.Canvas;
}

export const FabricObject = React.memo(function RectElement({ uuid, canvas, options }: IObjectProps) {
  const [object] = React.useState<fabric.Object>(() => createObject(options.type as ObjectType, options));
  const { setObjectMap } = useFabricStore((state) => ({ setObjectMap: state.setObjectMap }), shallow);
  const initFlag = React.useRef(false);

  React.useEffect(() => {
    if (!initFlag.current) {
      initFlag.current = true;
      canvas.add(object);
    }
  }, []);

  React.useEffect(() => {
    object.setOptions(options);
    object.setCoords();
    canvas.renderAll();
  }, [uuid, options, object]);

  React.useEffect(() => {
    const update = () => {
      setObjectMap(uuid, object.toObject());
    };
    object.on('moved', update);
    object.on('scaled', update);
    object.on('rotated', update);
    object.on('changed', update);
  }, [uuid, setObjectMap, object]);

  return <></>;
});

function createObject(type: ObjectType, options: fabric.IObjectOptions) {
  if (type === OBJECT_TYPE.Rect) {
    return new fabric.Rect(options);
  }
  if (type === OBJECT_TYPE.Circle) {
    return new fabric.Circle(options);
  }
  if (type === OBJECT_TYPE.Triangle) {
    return new fabric.Triangle(options);
  }
  return new fabric.Object();
}
