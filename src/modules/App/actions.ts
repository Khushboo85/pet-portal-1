import { LoginStatus } from './constants';
import { ActionEnums, User } from './types';

export interface SetLoginStatus {
  type: ActionEnums.setLoginStatus;
  payload: LoginStatus;
}
export const setLoginStatus = (payload: LoginStatus): SetLoginStatus => {
  return {
    type: ActionEnums.setLoginStatus,
    payload,
  };
};
export interface SetUserData {
  type: ActionEnums.setUserData;
  payload: User;
}
export const setUserData = (payload: User): SetUserData => {
  return {
    type: ActionEnums.setUserData,
    payload,
  };
};
export interface LogoutUser {
  type: ActionEnums.logOutUser;
}
export const logOutUser = (): LogoutUser => {
  return {
    type: ActionEnums.logOutUser,
  };
};

export type ActionTypes = SetLoginStatus | SetUserData;
