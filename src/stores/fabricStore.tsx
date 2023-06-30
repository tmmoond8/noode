import { create } from 'zustand';
import type { fabric } from 'fabric';

export interface FabricStore {
  canvas: Nullable<fabric.Canvas>;
  setCanvas: (canvas: fabric.Canvas) => void;
  textMap: { [key in string]: fabric.ITextboxOptions };
  setTextMap: (uuid: string, options: fabric.ITextboxOptions) => void;
  objectMap: { [key in string]: fabric.IObjectOptions };
  setObjectMap: (uuid: string, options: fabric.IObjectOptions) => void;
}

export const useFabricStore = create<FabricStore>((set, get) => ({
  canvas: null,
  setCanvas: (canvas) => set({ canvas }),
  textMap: {},
  setTextMap: (uuid: string, options: fabric.ITextboxOptions) => {
    const { textMap } = get();
    set({
      textMap: {
        ...textMap,
        [uuid]: options,
      },
    });
  },
  objectMap: {},
  setObjectMap: (uuid: string, options: fabric.IObjectOptions) => {
    const { objectMap } = get();
    set({
      objectMap: {
        ...objectMap,
        [uuid]: options,
      },
    });
  },
}));
