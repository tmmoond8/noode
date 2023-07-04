import React from 'react';
import { shallow, useFabricStore } from '@/stores';

export const useDevLog = () => {
  const { canvas, objectMap, whiteboard } = useFabricStore(
    (state) => ({
      canvas: state.canvas,
      objectMap: state.canvas,
      whiteboard: state.whiteboard,
    }),
    shallow,
  );

  React.useEffect(() => {
    if (!canvas) {
      return;
    }
    const handleKeyEvent = (e: KeyboardEvent) => {
      if (e.key === 'Alt') {
        console.log('canvas', canvas.toDatalessObject());
        console.log('objectMap', objectMap);
        console.log('whiteboard', whiteboard);
      }
    };

    (globalThis as any).__dev__ = {
      canvas,
    };

    globalThis.addEventListener('keydown', handleKeyEvent);

    return () => {
      globalThis.removeEventListener('keydown', handleKeyEvent);
    };
  }, [canvas, objectMap, whiteboard]);
};
