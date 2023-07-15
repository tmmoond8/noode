import { create } from 'zustand';
import type { fabric } from 'fabric';
import { SideMenuKey } from '@/constants';
import { parseFloat } from '@/utils/string';
import { ControlPanelData } from '@/types/editor';

export interface EditorUiStore {
  tab: Nullable<SideMenuKey>;
  setTab: (tab: Nullable<SideMenuKey>) => void;
  canvasSize: Bounds;
  setCanvasSize: (canvasSize: Bounds) => void;
  whiteboardSize: Bounds;
  setWhiteboardSize: (whiteboardSize: Bounds) => void;
  controlPanelData: Nullable<ControlPanelData>;
  setControlPanelData: (controlPanelData: Nullable<ControlPanelData>) => void;
}

export const useEditorUiStore = create<EditorUiStore>((set, get) => ({
  tab: null,
  setTab: (tab) => set({ tab }),
  canvasSize: {
    width: 328 * 8,
    height: 168 * 8,
    unit: 'px',
  },
  setCanvasSize: (canvasSize: Bounds) => {
    set({
      canvasSize: {
        width: parseFloat(canvasSize.width),
        height: parseFloat(canvasSize.height),
        unit: canvasSize.unit,
      },
    });
  },
  whiteboardSize: {
    width: 300,
    height: 300,
    unit: 'px',
  },
  setWhiteboardSize: (whiteboardSize: Bounds) => {
    set({
      whiteboardSize: {
        width: parseFloat(whiteboardSize.width),
        height: parseFloat(whiteboardSize.height),
        unit: whiteboardSize.unit,
      },
    });
  },
  controlPanelData: null,
  setControlPanelData: (controlPanelData: Nullable<ControlPanelData>) => {
    set({ controlPanelData });
  },
}));
