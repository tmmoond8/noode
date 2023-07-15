import React from 'react';
import { useInitializeCanvas } from './useInitializeCanvas';
import { useDevLog } from './useDevLog';
import { useSelectionEvent } from './useSelectionEvent';

export const useInitFabric = () => {
  useInitializeCanvas();
  useDevLog();
  useSelectionEvent();
};
