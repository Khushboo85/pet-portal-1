import { UserRole } from 'src/constants/roles';
import { User } from '../App/types';

export const getUser = (userData: any) => {
  if (!userData) return null;
  return {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    uid: userData.uid,
    role: userData.role,
  };
};

export const setDataInLocalStorage = (user: User) => {
  for (const prop in user) {
    //@ts-ignore
    localStorage.setItem(prop, user[prop]);
  }
};

export const getUserFromLocalStorage = () => {
  if (localStorage.getItem('uid')) {
    return {
      firstName: localStorage.getItem('firstName') || '',
      lastName: localStorage.getItem('lastName') || '',
      email: localStorage.getItem('email') || '',
      uid: localStorage.getItem('uid') || '',
      role: (localStorage.getItem('role') as UserRole) || '',
    };
  }
};
