import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import { shallow, useFabricStore } from '@/stores';
import { ObjectType, OBJECT_TYPE } from '@/constants';

interface IObjectProps {
  uuid: string;
  options: fabric.IObjectOptions;
  canvas: fabric.Canvas;
}

export const FabricObject = React.memo(function RectElement({ uuid, canvas, options }: IObjectProps) {
  const [object] = useState<fabric.Object>(() => createObject(options.type as ObjectType, options));
  const { setObjectMap } = useFabricStore((state) => ({ setObjectMap: state.setObjectMap }), shallow);
  const initFlag = React.useRef(false);

  useEffect(() => {
    if (!initFlag.current) {
      initFlag.current = true;
      canvas.add(object);
    }
  }, []);

  useEffect(() => {
    object.setOptions(options);
    object.setCoords();
  }, [uuid, options, object]);

  useEffect(() => {
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
  debugger;
  return new fabric.Object();
}
