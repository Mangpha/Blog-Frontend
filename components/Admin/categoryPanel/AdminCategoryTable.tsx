import dayjs from 'dayjs';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FindAllCategoryQuery_findAllCategories_categories } from '../../../pages/api/__graphql__/FindAllCategoryQuery';
import { DeleteCategoryModal } from './DeleteCategoryModal';
import { EditCategoryModal } from './EditCategoryModal';

interface IAdminCategoryTableProps {
  sortedData: FindAllCategoryQuery_findAllCategories_categories | undefined;
}

export const AdminCategoryTable: NextPage<IAdminCategoryTableProps> = ({ sortedData }) => {
  const router = useRouter();
  const [isEditOpen, setEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setDeleteOpen] = useState<boolean>(false);

  return (
    <>
      <tr key={sortedData?.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {sortedData?.id}
        </th>
        <td className="py-4 px-6">{sortedData?.name}</td>
        <td className="py-4 px-6">{dayjs(sortedData?.createdAt).format('YYYY-MM-DD HH:mm')}</td>
        <td className="py-4 px-6">{sortedData?.posts?.length || 0}</td>
        <td className="py-4 px-6 text-right">
          <div
            onClick={() => {
              router.push(`/blog/category/${sortedData?.id}`);
            }}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
          >
            Posts
          </div>
        </td>
        <td className="py-4 px-6 text-right">
          <div
            onClick={() => {
              setEditOpen(true);
            }}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
          >
            Edit
          </div>
          <EditCategoryModal categoryId={sortedData!.id} isOpen={isEditOpen} closeModal={() => setEditOpen(false)} />
        </td>
        <td className="py-4 px-6 text-right">
          <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer" onClick={() => setDeleteOpen(true)}>
            Delete
          </div>
          <DeleteCategoryModal categoryId={sortedData!.id} isOpen={isDeleteOpen} closeModal={() => setDeleteOpen(false)} />
        </td>
      </tr>
    </>
  );
};
