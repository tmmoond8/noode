import React from 'react';
import { shallow, useFabricStore } from '@/stores';

export const useDevLog = () => {
  const { canvas, objectMap } = useFabricStore(
    (store) => ({
      canvas: store.canvas,
      objectMap: store.canvas,
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
      }
    };

    (globalThis as any).__dev__ = {
      canvas,
    };

    globalThis.addEventListener('keydown', handleKeyEvent);

    return () => {
      globalThis.removeEventListener('keydown', handleKeyEvent);
    };
  }, [canvas]);
};
