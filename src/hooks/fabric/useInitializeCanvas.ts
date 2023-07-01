import React from 'react';
import { useDelay } from '@/hooks';
import { fabric } from 'fabric';
import { shallow, useFabricStore } from '@/stores';

export const useInitializeCanvas = (containerRef: React.RefObject<HTMLDivElement>) => {
  const delay500 = useDelay(500);
  const { setCanvas } = useFabricStore(
    (state) => ({
      setCanvas: state.setCanvas,
    }),
    shallow,
  );

  React.useEffect(() => {
    if (containerRef.current && delay500) {
      const { offsetHeight, offsetWidth } = containerRef.current;
      const _canvas = new fabric.Canvas('canvas', {
        width: offsetWidth,
        height: offsetHeight,
        backgroundColor: 'gray',
        renderOnAddRemove: true,
      });
      setCanvas(_canvas);

      fabric.Object.prototype.transparentCorners = true;
      fabric.Object.prototype.cornerColor = 'blue';
      fabric.Object.prototype.cornerStyle = 'circle';

      return () => {
        if (process.env.NODE_ENV !== 'development') {
          _canvas.dispose();
        }
      };
    }
  }, [delay500]);
};
