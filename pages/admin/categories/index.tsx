import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { AdminContainer } from '../../../components/Admin/AdminContainer';
import { AdminCategoryList } from '../../../components/Admin/categoryPanel/AdminCategoriesList';
import { Loading } from '../../../components/Loading';
import { FIND_ALL_CATEGORY_QUERY } from '../../api/gql';
import { FindAllCategoryQuery } from '../../api/__graphql__/FindAllCategoryQuery';

const AdminCategoryPanel = () => {
  const { data: categoryData, loading } = useQuery<FindAllCategoryQuery>(FIND_ALL_CATEGORY_QUERY);
  const [hasWindow, setHasWindow] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== 'undefined') setHasWindow(true);
  }, []);

  return (
    hasWindow && (
      <AdminContainer>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  ID
                </th>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  CreatedAt
                </th>
                <th scope="col" className="py-3 px-6">
                  Post Count
                </th>
                <th scope="col" className="py-3 px-6">
                  <span className="sr-only">Posts</span>
                </th>
                <th scope="col" className="py-3 px-6">
                  <span className="sr-only">Edit</span>
                </th>
                <th scope="col" className="py-3 px-6">
                  <span className="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            {loading ? (
              <tbody>
                <tr>
                  <td>
                    <Loading />
                  </td>
                </tr>
              </tbody>
            ) : (
              <AdminCategoryList categories={categoryData} />
            )}
          </table>
        </div>
      </AdminContainer>
    )
  );
};

export default AdminCategoryPanel;
