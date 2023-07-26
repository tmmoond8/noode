import React from 'react';
import { fabric } from 'fabric';
import throttle from 'lodash-es/throttle';
import { shallow, useDispatch, useFabricStore, useSelector } from '@/stores';
import { ObjectType, OBJECT_TYPE } from '@/constants';

interface IObjectProps {
  uuid: string;
  options: fabric.IObjectOptions;
  canvas: fabric.Canvas;
}

export const FabricObject = React.memo(function RectElement({ uuid, canvas, options }: IObjectProps) {
  const [object] = React.useState<fabric.Object>(() => createObject(options.type as ObjectType, options));
  const { dispatch, actions } = useDispatch();
  // const { ffabric } = useSelector(store => store);
  // const { setObjectMap } = useFabricStore((state) => ({ setObjectMap: state.setObjectMap }), shallow);
  const initFlag = React.useRef(false);
  const initFlag2 = React.useRef(false);

  React.useEffect(() => {
    if (!initFlag.current) {
      initFlag.current = true;
      canvas.add(object);
    }
  }, []);

  React.useEffect(() => {
    object.setOptions(options);
    object.setCoords();
  }, [uuid, options, object]);

  React.useEffect(() => {
    if (!initFlag2.current) {
      initFlag2.current = true;
      const update = throttle(() => {
        // dispatch(
        //   actions.ffabric.setObjectMap({
        //     uuid,
        //     updater: object.toObject(),
        //   }),
        // );
      }, 100);
      object.on('moving', update);
      object.on('scaling', update);
      object.on('rotating', update);
      object.on('skewing', update);
      object.on('resizing', update);
    }
  }, [uuid, dispatch, object]);

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
