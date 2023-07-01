import { create } from 'zustand';
import type { fabric } from 'fabric';
import { SideMenuKey } from '@/constants';
import { parseFloat } from '@/utils/string';

export interface EditorUiStore {
  tab: Nullable<SideMenuKey>;
  setTab: (tab: Nullable<SideMenuKey>) => void;
  whiteboardSize: Bounds;
  setWhiteboardSize: ({ width, height }: Bounds) => void;
}

export const useEditorUiStore = create<EditorUiStore>((set, get) => ({
  tab: null,
  setTab: (tab) => set({ tab }),
  whiteboardSize: {
    width: 600,
    height: 600,
    unit: 'px',
  },
  setWhiteboardSize: (whiteboardSize: Bounds) =>
    set({
      whiteboardSize: {
        width: parseFloat(whiteboardSize.width),
        height: parseFloat(whiteboardSize.height),
        unit: whiteboardSize.unit,
      },
    }),
}));
