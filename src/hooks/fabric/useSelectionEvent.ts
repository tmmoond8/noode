import React from 'react';
import { useFabricStore } from '@/stores';

export const useSelectionEvent = () => {
  const { canvas } = useFabricStore();
  React.useEffect(() => {
    if (!canvas) {
      return;
    }

    canvas.on('selection:created', function (e) {
      console.log('selection:created', e);
    });
    canvas.on('selection:updated', function (e) {
      console.log('selection:updated', e);
    });
    canvas.on('selection:cleared', function (e) {
      console.log('selection:cleared', e);
    });
  }, [canvas]);
};
