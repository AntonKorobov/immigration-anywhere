import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalStateInterface {
  locationId: string;
  isReviewFormOpen: boolean;
}

const initialState: GlobalStateInterface = {
  locationId: '',
  isReviewFormOpen: false,
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
    setIsReviewFormOpen: (state, action: PayloadAction<boolean, string>) => {
      return {
        ...state,
        isReviewFormOpen: action.payload,
      };
    },
  },
});

export const globalStateActions = globalStateActionsCreator.actions;
export const globalStateReducer = globalStateActionsCreator.reducer;
