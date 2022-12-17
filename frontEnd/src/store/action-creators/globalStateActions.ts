import { createSlice } from '@reduxjs/toolkit';

interface GlobalStateInterface {
  page: string;
}

const initialState: GlobalStateInterface = {
  page: 'Main',
};

export const globalStateActionsCreator = createSlice({
  name: 'globalState',
  initialState,
  reducers: {},
});

export const globalStateActions = globalStateActionsCreator.actions;
export const globalStateReducer = globalStateActionsCreator.reducer;
