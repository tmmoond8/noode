import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export interface FabricState {
  canvas: Nullable<fabric.Canvas>;
  textMap: { [key in string]: fabric.ITextboxOptions };
  objectMap: { [key in string]: fabric.IObjectOptions };
  whiteboard: Nullable<fabric.IRectOptions>;
  selectedObjects: Array<fabric.Object>;
}

type R<T> = CaseReducer<FabricState, PayloadAction<T>>;

export type FabricReducers = {
  setCanvas: CaseReducer<FabricState, PayloadAction<fabric.Canvas>>;
  setTextMap: R<{
    uuid: string;
    options: fabric.ITextboxOptions;
  }>;
  setObjectMap: R<{
    uuid: string;
    updater: Updater<fabric.IObjectOptions>;
  }>;
  setWhiteboard: R<fabric.IRectOptions>;
  setSelectedObjects: R<Array<fabric.Object>>;
  undo: () => void;
  redo: () => void;
};

const initialState: FabricState = {
  canvas: null,
  textMap: {},
  objectMap: {},
  whiteboard: null,
  selectedObjects: [],
};

const ageSlice = createSlice<FabricState, FabricReducers>({
  name: 'age',
  initialState,
  reducers: {
    setCanvas: (state, action) => {
      state.canvas = action.payload as any;
    },
    setTextMap: (state, action) => {
      state.textMap[action.payload.uuid] = action.payload.options as any;
    },
    setObjectMap: (state, action) => {
      console.log('state.objectMap', state.objectMap);
      for (let key in state) console.log(key);
      state.objectMap = {
        ...state.objectMap,
        [action.payload.uuid]: action.payload.updater,
      } as any;
      // state.objectMap[action.payload.uuid] = action.payload.updater as any;

      // state.objectMap[action.payload.uuid] =
      //   typeof action.payload.updater === 'function'
      //     ? action.payload.updater(state.objectMap[action.payload.uuid] as any)
      //     : (action.payload.updater as any);
    },
    setWhiteboard: (state, action) => {
      state.whiteboard = action.payload as any;
    },
    setSelectedObjects: (state, action) => {
      state.selectedObjects = action.payload as any;
    },
    undo: () => {},
    redo: () => {},
  },
});

export const ageActions = ageSlice.actions;
export default ageSlice.reducer;
