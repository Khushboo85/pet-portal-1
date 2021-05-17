import { UserRole } from 'src/constants/roles';

export enum DrawerOptions {
  Bookings = 'Bookings',
  Pets = 'Pets',
  User ='User'
}

export const ROLE_TO_OPTIONS_MAP: any = {
  [UserRole.Employee]: [DrawerOptions.Bookings],
  [UserRole.User]: [DrawerOptions.Bookings, DrawerOptions.Pets],
  [UserRole.Admin]: [DrawerOptions.Bookings, DrawerOptions.Pets, DrawerOptions.User]
};
