import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch as _useDispatch, useSelector as _useSelector } from 'react-redux';
import undoable from 'redux-undo';

export { shallow } from 'zustand/shallow';

export * from './fabricStore';
export * from './editorUiStore';

import ageStore, { ageActions } from './ageStore';
import levelStore, { levelActions } from './levelStore';
import React from 'react';

const store = configureStore({
  reducer: {
    // ffabric: ageStore,
    ffabric: undoable(ageStore, {
      undoType: 'ffabric/undo',
      redoType: 'ffabric/redo',
    }),
    level: undoable(levelStore, {
      undoType: 'level/undo',
      redoType: 'level/redo',
    }),
  },
  devTools: false,
});

export default store;

export const actions = {
  ffabric: ageActions,
  level: levelActions,
};

export const useActions = () => actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useDispatch = () => {
  const dispatch = _useDispatch<AppDispatch>();
  return React.useMemo(
    () => ({
      dispatch,
      actions,
    }),
    [dispatch],
  );
};
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
