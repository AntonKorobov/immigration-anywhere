import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { globalStateActions } from 'store/action-creators/globalStateActions';
const actions = {
  ...globalStateActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
