import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MapType, settingInterface } from 'types/settingsType';

interface GlobalStateInterface {
  locationId: string;
  isReviewFormOpen: boolean;
  settings: settingInterface;
}

const initialState: GlobalStateInterface = {
  locationId: '',
  isReviewFormOpen: false,
  settings: {
    // mapType: JSON.parse(localStorage.getItem('settings')).mapType || MapType.flat,
    mapType: MapType.flat,
  },
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
    setSettings: (state, action: PayloadAction<settingInterface, string>) => {
      localStorage.setItem('settings', JSON.stringify(action.payload));
      return {
        ...state,
        settings: action.payload,
      };
    },
  },
});

export const globalStateActions = globalStateActionsCreator.actions;
export const globalStateReducer = globalStateActionsCreator.reducer;
