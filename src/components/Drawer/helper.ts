import { ROLE_TO_OPTIONS_MAP } from 'src/components/Drawer/constants';
import { UserRole } from '../../constants/roles';

export const getDrawerOptionsByRole = (
  role: UserRole | undefined
): Array<string> => {
  if (!role) return [];
  return ROLE_TO_OPTIONS_MAP[role];
};
