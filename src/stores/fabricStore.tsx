import { create } from 'zustand';
import type { fabric } from 'fabric';

export interface FabricStore {
  // canvas: Nullable<fabric.Canvas>;
  // setCanvas: (canvas: fabric.Canvas) => void;
  // textMap: { [key in string]: fabric.ITextboxOptions };
  // setTextMap: (uuid: string, options: fabric.ITextboxOptions) => void;
  // objectMap: { [key in string]: fabric.IObjectOptions };
  // setObjectMap: (uuid: string, updater: Updater<fabric.IObjectOptions>) => void;
  // whiteboard: Nullable<fabric.IRectOptions>;
  // setWhiteboard: SetState<fabric.IRectOptions>;
  // selectedObjects: Array<fabric.Object>;
  // setSelectedObjects: (objects: Array<fabric.Object>) => void;
}

export const useFabricStore = create<FabricStore>((set, get) => ({
  // canvas: null,
  // setCanvas: (canvas) => set({ canvas }),
  // textMap: {},
  // setTextMap: (uuid: string, options: fabric.ITextboxOptions) => {
  //   const { textMap } = get();
  //   set({
  //     textMap: {
  //       ...textMap,
  //       [uuid]: options,
  //     },
  //   });
  // },
  // objectMap: {},
  // setObjectMap: (uuid: string, updater: Updater<fabric.IObjectOptions>) => {
  //   const { objectMap } = get();
  //   if (typeof updater === 'function') {
  //     if (!objectMap[uuid]) {
  //       return;
  //     }
  //     set({
  //       objectMap: {
  //         ...objectMap,
  //         [uuid]: updater(objectMap[uuid]),
  //       },
  //     });
  //   } else {
  //     set({
  //       objectMap: {
  //         ...objectMap,
  //         [uuid]: updater,
  //       },
  //     });
  //   }
  // },
  // whiteboard: null,
  // setWhiteboard: (updater) => {
  //   if (typeof updater === 'function') {
  //     const { whiteboard } = get();
  //     const newData = updater(whiteboard!);
  //     set({ whiteboard: newData });
  //   } else {
  //     set({ whiteboard: updater });
  //   }
  // },
  // selectedObjects: [],
  // setSelectedObjects: (objects: Array<fabric.Object>) => {
  //   set({ selectedObjects: objects });
  // },
}));
