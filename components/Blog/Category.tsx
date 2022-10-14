import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export const Category = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col text-lg font-medium text-center text-gray-500 dark:text-gray-400">
      <Link href={`/blog`}>
        <a
          className={`inline-block text-2xl mb-5 font-bold py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white transition-colors`}
        >
          All Posts
        </a>
      </Link>
      {/* {data.findAllCategories.success &&
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
        ))} */}
    </div>
  );
};
