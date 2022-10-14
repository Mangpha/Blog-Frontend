import { NextPage } from 'next';
import { FindAllCategoryQuery } from '../../../pages/api/__graphql__/FindAllCategoryQuery';
import { AdminCategoryTable } from './AdminCategoryTable';

interface IAdminCategoryListProps {
  categories?: FindAllCategoryQuery;
}

export const AdminCategoryList: NextPage<IAdminCategoryListProps> = ({ categories }) => {
  const sortedData = categories?.findAllCategories.categories?.map((el) => el);
  sortedData?.sort((a, b) => b.id - a.id);

  return (
    <tbody>
      {sortedData?.map((data) => (
        <AdminCategoryTable key={data.id} sortedData={data} />
      ))}
    </tbody>
  );
};
