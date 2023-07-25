import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  age: 29,
};

const ageSlice = createSlice({
  name: 'age',
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.age = state.age + action.payload;
    },

    minusNumber: (state, action) => {
      state.age = state.age - action.payload;
    },
    undo: () => {},
    redo: () => {},
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const ageActions = ageSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default ageSlice.reducer;
