import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  level: 29,
};

const levelSlice = createSlice({
  name: 'level',
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.level = state.level + action.payload;
    },

    minusNumber: (state, action) => {
      state.level = state.level - action.payload;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const levelActions = levelSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default levelSlice.reducer;
