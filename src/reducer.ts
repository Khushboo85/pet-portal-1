import { combineReducers } from 'redux';
import appState from './modules/App/reducer';
import { ActionEnums } from './modules/App/types';
export type RootState = ReturnType<typeof rootReducer>;
const appReducerState = combineReducers({
  appState,
});

export const rootReducer = (state: any, action: any) => {
  if (action.type === ActionEnums.logOutUser) {
    state = undefined;
  }
  return appReducerState(state, action);
};
export default rootReducer;
