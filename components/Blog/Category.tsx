import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useMyData } from '../../hooks/useMyData';
import { FindAllCategoryQuery } from '../../pages/api/__graphql__/FindAllCategoryQuery';
import { UserRoles } from '../../pages/api/__graphql__/globalTypes';

interface ICategoryProps {
  data: FindAllCategoryQuery;
  selectId?: number;
}

export const Category: React.FC<ICategoryProps> = ({ data, selectId }) => {
  const { data: userData } = useMyData();
  const router = useRouter();

  return (
    <div className="flex flex-col text-lg font-medium text-center text-gray-500 dark:text-gray-400">
      {userData?.myData.role === UserRoles.Admin ? (
        <button onClick={() => router.push('/blog/create_post')} className="px-5 py-2 bg-sky-400 dark:bg-sky-300 rounded dark:text-black mb-10">
          Create Post
        </button>
      ) : (
        <></>
      )}
      <Link href={`/blog`}>
        <a
          className={`inline-block text-2xl mb-5 font-bold py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white transition-colors`}
        >
          All Posts
        </a>
      </Link>
      {data.findAllCategories.success &&
        data.findAllCategories.categories?.map((category) => (
          <Link href={`/blog/category/${category.id}`} key={category.id}>
            <a
              className={`inline-block ${
                selectId === category.id && 'bg-gray-300 dark:bg-gray-400 dark:text-white'
              } py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white transition-colors`}
            >
              {category.name}
            </a>
          </Link>
        ))}
    </div>
  );
};
