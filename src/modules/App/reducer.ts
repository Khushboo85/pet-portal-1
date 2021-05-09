import { ActionTypes } from './actions';
import { LoginStatus } from "./constants";
import { ActionEnums, User } from "./types";

interface State {
  user: User | null;
  loginStatus: LoginStatus;
}

const initState: State = Object.assign(
  {},
  {
    user: null,
    loginStatus: LoginStatus.loggedOut,
  }
);

const reducer = (state: State = initState, action: ActionTypes): State => {
  switch (action.type) {
    case ActionEnums.setLoginStatus:
      return {
        ...state,
        loginStatus: action.payload,
      };
    case ActionEnums.setUserData:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
