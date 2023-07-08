import React from 'react';
import { fabric } from 'fabric';
import { resizeCanvas } from '@/utils/canvas';
import { shallow, useEditorUiStore, useFabricStore } from '@/stores';

export const useResizeCanvas = (containerRef: React.RefObject<HTMLDivElement>) => {
  const { canvas } = useFabricStore(
    (state) => ({
      canvas: state.canvas,
    }),
    shallow,
  );
  const { tab, controlPanelData } = useEditorUiStore(
    (state) => ({
      tab: state.tab,
      controlPanelData: state.controlPanelData,
    }),
    shallow,
  );
  React.useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !canvas) {
        return;
      }
      resizeCanvas(canvas, containerRef.current.offsetWidth, containerRef.current.offsetHeight);
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
  }, [tab, canvas, controlPanelData]);
};
