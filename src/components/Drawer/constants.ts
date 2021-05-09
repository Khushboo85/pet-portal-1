import { UserRole } from 'src/constants/roles';

export enum DrawerOptions {
  Bookings = 'Bookings',
  Pets = 'Pets',
}

export const ROLE_TO_OPTIONS_MAP: any = {
  [UserRole.Employee]: [DrawerOptions.Bookings],
  [UserRole.User]: [DrawerOptions.Bookings, DrawerOptions.Pets],
};
