import { create } from 'zustand';
import type { fabric } from 'fabric';

export interface FabricStore {
  canvas: Nullable<fabric.Canvas>;
  setCanvas: (canvas: fabric.Canvas) => void;
}

export const useFabricStore = create<FabricStore>((set, get) => ({
  canvas: null,
  setCanvas: (canvas) => set({ canvas }),
}));
