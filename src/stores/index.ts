import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch as _useDispatch, useSelector as _useSelector } from 'react-redux';
import undoable from 'redux-undo';

export { shallow } from 'zustand/shallow';

export * from './fabricStore';
export * from './editorUiStore';

import ageStore, { ageActions } from './ageStore';
import levelStore, { levelActions } from './levelStore';

const store = configureStore({
  reducer: {
    age: undoable(ageStore, {
      undoType: 'age/undo',
      redoType: 'age/redo',
    }),
    level: undoable(levelStore, {
      undoType: 'level/undo',
      redoType: 'level/redo',
    }),
  },
});

export default store;

export const actions = {
  age: ageActions,
  level: levelActions,
};

export const useActions = () => actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => _useDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
