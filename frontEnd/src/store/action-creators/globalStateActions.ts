import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguageType, MapType, settingInterface } from 'types/settingsType';

interface GlobalStateInterface {
  locationId: string;
  isReviewFormOpen: boolean;
  settings: settingInterface;
}

const settings = localStorage.getItem('settings');

const initialState: GlobalStateInterface = {
  locationId: '',
  isReviewFormOpen: false,
  settings: {
    mapType: settings ? (JSON.parse(settings) as settingInterface).mapType : MapType.flat,
    language: settings ? (JSON.parse(settings) as settingInterface).language : LanguageType.by,
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
      localStorage.setItem('settings', JSON.stringify({ ...action.payload }));
      return {
        ...state,
        settings: { ...action.payload },
      };
    },
  },
});

export const globalStateActions = globalStateActionsCreator.actions;
export const globalStateReducer = globalStateActionsCreator.reducer;
