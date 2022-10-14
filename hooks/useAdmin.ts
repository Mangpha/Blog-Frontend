import { UserRoles } from '../pages/api/__graphql__/globalTypes';
import { useMyData } from './useMyData';

export const useAdmin = () => {
  const { data } = useMyData();

  if (data?.myData.role !== UserRoles.Admin) {
    return { admin: false };
  } else return { admin: true };
};
