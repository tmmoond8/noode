import { create } from 'zustand';
import type { fabric } from 'fabric';
import { SideMenuKey } from '@/constants';

export interface EditorUiStore {
  tab: Nullable<SideMenuKey>;
  setTab: (tab: Nullable<SideMenuKey>) => void;
}

export const useEditorUiStore = create<EditorUiStore>((set, get) => ({
  tab: null,
  setTab: (tab) => set({ tab }),
}));
