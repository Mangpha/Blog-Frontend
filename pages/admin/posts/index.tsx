import { useQuery } from '@apollo/client';
import React from 'react';
import { AdminContainer } from '../../../components/Admin/AdminContainer';
import { AdminPostsList } from '../../../components/Admin/postPanel/AdminPostsList';
import { AdminPostPagination } from '../../../components/Admin/postPanel/AdminPostsPagination';
import { Loading } from '../../../components/Loading';
import { ADMIN_FIND_ALL_POSTS } from '../../api/gql';
import { AdminFindAllPosts, AdminFindAllPostsVariables } from '../../api/__graphql__/AdminFindAllPosts';

const AdminPostsPanel = () => {
  const [page, setPage] = React.useState<number>(1);
  const onNext = () => setPage(() => page + 1);
  const onPrev = () => setPage(() => page - 1);
  const { data: postData, loading } = useQuery<AdminFindAllPosts, AdminFindAllPostsVariables>(ADMIN_FIND_ALL_POSTS, {
    variables: {
      input: {
        page,
        take: 10,
      },
    },
  });

  return (
    <AdminContainer>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Title
              </th>
              <th scope="col" className="py-3 px-6">
                Author
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                UpdatedAt
              </th>
              <th scope="col" className="py-3 px-6">
                CreatedAt
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
            <AdminPostsList posts={postData} />
          )}
        </table>
        <AdminPostPagination onPrev={onPrev} onNext={onNext} page={page} totalPages={postData?.findAllPosts.totalPages} />
      </div>
    </AdminContainer>
  );
};
export default AdminPostsPanel;
