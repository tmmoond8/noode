import { create } from 'zustand';
import type { fabric } from 'fabric';
import { SideMenuKey } from '@/constants';
import { parseFloat } from '@/utils/string';
import { ControlPanelData } from '@/types/editor';

export interface EditorUiStore {
  tab: Nullable<SideMenuKey>;
  setTab: (tab: Nullable<SideMenuKey>) => void;
  whiteboardSize: Bounds;
  setWhiteboardSize: (whiteboardSize: Bounds) => void;
  selectedObjects: any[];
  setSelectedObjects: (objects: []) => void;
  controlPanelData: Nullable<ControlPanelData>;
  setControlPanelData: (controlPanelData: Nullable<ControlPanelData>) => void;
}

export const useEditorUiStore = create<EditorUiStore>((set, get) => ({
  tab: null,
  setTab: (tab) => set({ tab }),
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
  selectedObjects: [],
  setSelectedObjects: (selectedObjects: []) => {
    set({
      selectedObjects,
    });
  },
  controlPanelData: null,
  setControlPanelData: (controlPanelData: Nullable<ControlPanelData>) => {
    set({ controlPanelData });
  },
}));
