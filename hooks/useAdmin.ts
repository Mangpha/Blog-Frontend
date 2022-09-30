import { useRouter } from 'next/router';
import { UserRoles } from '../pages/api/__graphql__/globalTypes';
import { useMyData } from './useMyData';

interface IUseAdminProps {
  redirect: string;
}

export const useAdmin = ({ redirect }: IUseAdminProps) => {
  const { data } = useMyData();
  const router = useRouter();
  if (data?.myData.role !== UserRoles.Admin) {
    router.push(redirect);
  } else return true;
};
