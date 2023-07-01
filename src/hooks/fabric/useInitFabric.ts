import React from 'react';
import { useInitializeCanvas } from './useInitializeCanvas';
import { useResizeCanvas } from './useResizeCanvas';
import { useDevLog } from './useDevLog';
import { useSelectionEvent } from './useSelectionEvent';

export const useInitFabric = (containerRef: React.RefObject<HTMLDivElement>) => {
  useInitializeCanvas(containerRef);
  useDevLog();
  useSelectionEvent();
  useResizeCanvas(containerRef);
};
