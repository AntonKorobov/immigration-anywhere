import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalStateInterface {
  locationId: string;
}

const initialState: GlobalStateInterface = {
  locationId: '',
};

export const globalStateActionsCreator = createSlice({
  name: 'globalState',
  initialState,
  reducers: {
    setLocationId: (state, action: PayloadAction<string, string>) => {
      return {
        ...state,
        locationId: action.payload,
      };
    },
  },
});

export const globalStateActions = globalStateActionsCreator.actions;
export const globalStateReducer = globalStateActionsCreator.reducer;
