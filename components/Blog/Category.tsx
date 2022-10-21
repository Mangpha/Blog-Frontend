import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
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
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    if (userData?.myData.role === UserRoles.Admin) setIsAdmin(true);
    else setIsAdmin(false);
  }, [userData]);

  return (
    <div className="text-lg font-medium text-center text-gray-500 dark:text-gray-400">
      {isAdmin ? (
        <button onClick={() => router.push('/blog/create_post')} className="px-5 py-2 mr-3 bg-sky-400 dark:bg-sky-300 rounded dark:text-black mb-10">
          Create Post
        </button>
      ) : (
        <></>
      )}
      {data.findAllCategories.success &&
        data.findAllCategories.categories?.map((category) => (
          <>
            <i className="fa-solid fa-tag text-yellow-400 dark:text-yellow-300"></i>
            <Link href={`/blog/category/${category.id}`} key={category.id}>
              <a className={`inline-block ${selectId === category.id && 'dark:text-white'} hover:text-violet-300 dark:hover:text-gray-200 transition-colors ml-2 mr-7`}>
                {category.name}
              </a>
            </Link>
          </>
        ))}
    </div>
  );
};
