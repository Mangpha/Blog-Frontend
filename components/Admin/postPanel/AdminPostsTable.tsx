import dayjs from 'dayjs';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AdminFindAllPosts_findAllPosts_posts } from '../../../pages/api/__graphql__/AdminFindAllPosts';
import { DeletePostModal } from './DeletePostModal';

interface IAdminPostsTableProps {
  sortedPost: AdminFindAllPosts_findAllPosts_posts | undefined;
}

export const AdminPostsTable: NextPage<IAdminPostsTableProps> = ({ sortedPost: post }) => {
  const router = useRouter();
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {post?.title}
      </th>
      <td className="py-4 px-6">{post?.author?.username}</td>
      <td className="py-4 px-6">{post?.category?.name || '-'}</td>
      <td className="py-4 px-6">{dayjs(post?.updatedAt).format('YYYY-MM-DD HH:mm')}</td>
      <td className="py-4 px-6">{dayjs(post?.createdAt).format('YYYY-MM-DD HH:mm')}</td>
      <td className="py-4 px-6 text-right">
        <div
          onClick={() => {
            router.push(`/blog/edit_post?postId=${post?.id}`);
          }}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
        >
          Edit
        </div>
      </td>
      <td className="py-4 px-6 text-right">
        <div onClick={() => setOpen(true)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer">
          Delete
        </div>
        <DeletePostModal postId={post!.id} isOpen={isOpen} closeModal={() => setOpen(false)} />
      </td>
    </tr>
  );
};
