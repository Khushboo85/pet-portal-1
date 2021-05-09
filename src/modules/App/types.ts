import { UserRole } from 'src/constants/roles';

export interface User {
  firstName: string;
  lastName: string;
  uid: string;
  role: UserRole;
  email: string;
}

export enum ActionEnums {
  setLoginStatus = 'setLoginStatus',
  setUserData = 'setUserData',
  logOutUser = 'logOutUser',
}
