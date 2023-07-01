import React from 'react';
import { useDelay } from './useDelay';
import { fabric } from 'fabric';
import { resizeCanvas } from '@/utils/canvas';
import { shallow, useEditorUiStore, useFabricStore } from '@/stores';

export const useInitFabric = (containerRef: React.RefObject<HTMLDivElement>) => {
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
  useDevLog();
};

export const useResizeCanvas = ({
  canvas,
  containerRef,
}: {
  canvas: Nullable<fabric.Canvas>;
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const { tab } = useEditorUiStore(
    (state) => ({
      tab: state.tab,
    }),
    shallow,
  );
  React.useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && canvas) {
        resizeCanvas(canvas, containerRef.current.offsetWidth, containerRef.current.offsetHeight);
      }
    };
    handleResize();
    if (globalThis) {
      globalThis.addEventListener('resize', handleResize);
      return () => {
        globalThis.removeEventListener('resize', handleResize);
      };
    }
  }, [canvas]);

  React.useEffect(() => {
    if (!canvas || !containerRef.current) {
      return;
    }
    resizeCanvas(canvas, containerRef.current.offsetWidth, containerRef.current.offsetHeight);
  }, [tab, canvas]);
};

export const useDevLog = () => {
  const { canvas, objectMap } = useFabricStore();

  React.useEffect(() => {
    if (!canvas) {
      return;
    }
    const handleKeyEvent = (e: KeyboardEvent) => {
      if (e.key === 'Alt') {
        console.log('canvas', canvas.toDatalessObject());
        console.log('objectMap', objectMap);
      }
    };

    globalThis.addEventListener('keydown', handleKeyEvent);

    return () => {
      globalThis.removeEventListener('keydown', handleKeyEvent);
    };
  }, [canvas]);
};
