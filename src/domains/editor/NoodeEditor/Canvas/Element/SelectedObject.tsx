import React from 'react';
import { fabric } from 'fabric';
import { shallow, useFabricStore } from '@/stores';
import { compareObject } from '@/utils/canvas';

interface IObjectProps {
  canvas: Nullable<fabric.Canvas>;
}

export const SelectedObject = React.memo(function RectElement({ canvas }: IObjectProps) {
  const prevSelectedObjectMap = React.useRef<Record<string, fabric.Object>>({});
  const timerRef = React.useRef<ReturnType<typeof setTimeout>>();
  const { selectedObjects } = useFabricStore(
    (state) => ({
      selectedObjects: state.selectedObjects,
    }),
    shallow,
  );

  const diff = selectedObjects.some((object) => {
    const prevObject = prevSelectedObjectMap.current[object.name!];
    if (prevObject && compareObject(prevObject, object)) {
      return true;
    }
    return false;
  });

  if (diff) {
    timerRef.current = setTimeout(() => {
      canvas?.renderAll();
    }, 100);
  }

  prevSelectedObjectMap.current = selectedObjects.reduce((acc: Record<string, fabric.Object>, object) => {
    acc[object.name!] = object;
    return acc;
  }, {});

  React.useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  if (!canvas) {
    return <></>;
  }

  return <></>;
});
