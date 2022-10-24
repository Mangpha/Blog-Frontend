import { NextPage } from 'next';
import Link from 'next/link';

interface IPostCardProps {
  id: number;
  category: {
    id: number;
    name: string;
  } | null;
  title: string;
  createdAt: string;
}

const PostCard: NextPage<IPostCardProps> = ({ category, title, createdAt, id }) => {
  return (
    <div className="flex justify-center">
      <div className="block rounded-lg shadow-lg text-center w-full">
        <div className="py-3 px-6 border-b border-gray-300 text-gray-500 dark:text-gray-300">
          {category?.id ? (
            <>
              <i className="fa-solid fa-tag text-yellow-400 dark:text-yellow-300 mr-3"></i>
              <Link href={`/category/${category?.id}`}>
                <a className="hover:text-violet-300 dark:hover:text-gray-200 transition-colors">{category.name}</a>
              </Link>
            </>
          ) : (
            '-'
          )}
        </div>
        <div className="p-6 h-36">
          <div className="text-xl break-words">{title}</div>
        </div>
        <Link href={`/${id}`}>
          <div className="inline-flex justify-center rounded-md border border-transparent hover:cursor-pointer mb-5 bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
            Read More
          </div>
        </Link>
        <div className="py-3 px-6 border-t border-gray-300 text-gray-500 dark:text-gray-300">
          <i className="fa-solid fa-calendar text-yellow-400 dark:text-yellow-300"></i> {createdAt}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
