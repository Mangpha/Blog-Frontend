import { useMutation } from '@apollo/client';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React from 'react';
import { DELETE_POST_MUTATION } from '../../pages/api/gql';
import { AdminFindAllPosts } from '../../pages/api/__graphql__/AdminFindAllPosts';
import { DeletePostMutation, DeletePostMutationVariables } from '../../pages/api/__graphql__/DeletePostMutation';
import { Loading } from '../Loading';

interface IAdminPostListProps {
  posts: AdminFindAllPosts | undefined;
}

export const AdminPostsList: React.FC<IAdminPostListProps> = ({ posts }) => {
  const router = useRouter();
  const [deletePostMutation, { loading }] = useMutation<DeletePostMutation, DeletePostMutationVariables>(DELETE_POST_MUTATION, {
    onCompleted: () => {
      router.push('/admin');
    },
  });

  return (
    <tbody>
      {posts?.findAllPosts.posts?.map((post, idx) => (
        <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {post.title}
          </th>
          <td className="py-4 px-6">{post.author?.username}</td>
          <td className="py-4 px-6">{post.category?.name || '-'}</td>
          <td className="py-4 px-6">{dayjs(post.updatedAt).format('YYYY-MM-DD HH:mm')}</td>
          <td className="py-4 px-6">{dayjs(post.createdAt).format('YYYY-MM-DD HH:mm')}</td>
          <td className="py-4 px-6 text-right">
            <div
              onClick={() => {
                router.push(`/blog/edit_post?postId=${post.id}`);
              }}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
            >
              Edit
            </div>
          </td>
          <td className="py-4 px-6 text-right">
            <div
            //   onClick={() => {
            //     return confirmAlert({
            //       customUI: ({ onClose }) => (
            //         <div className="px-10 pt-7 pb-5 shadow-xl rounded-lg bg-gray-500 text-white">
            //           <h1 className="text-xl mb-5">Are you sure you want to delete it?</h1>
            //           <button
            //             onClick={() => {
            //               deletePostMutation({
            //                 variables: {
            //                   input: {
            //                     id: post.id,
            //                   },
            //                 },
            //               });
            //               onClose();
            //             }}
            //             type="button"
            //             className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            //           >
            //             Yes
            //           </button>
            //           <button
            //             onClick={() => onClose()}
            //             type="button"
            //             className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            //           >
            //             No
            //           </button>
            //           {loading && <Loading />}
            //         </div>
            //       ),
            //     });
            //   }}
            //   className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
            // >
            >
              Delete
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
