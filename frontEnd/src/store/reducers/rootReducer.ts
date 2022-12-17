import { combineReducers } from 'redux';

import { backend } from 'services/backend';
import { globalStateReducer } from 'store/action-creators/globalStateActions';

export const rootReducer = combineReducers({
  [backend.reducerPath]: backend.reducer,
  globalState: globalStateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
