import { create } from 'zustand';
import type { fabric } from 'fabric';
import { SideMenuKey } from '@/constants';

export interface EditorUiStore {
  tab: Nullable<SideMenuKey>;
  setTab: (tab: Nullable<SideMenuKey>) => void;
  whiteboardSize: Size;
  setWhiteboardSize: ({ width, height }: Size) => void;
}

export const useEditorUiStore = create<EditorUiStore>((set, get) => ({
  tab: null,
  setTab: (tab) => set({ tab }),
  whiteboardSize: {
    width: 0,
    height: 0,
  },
  setWhiteboardSize: (whiteboardSize: Size) => set({ whiteboardSize }),
}));
