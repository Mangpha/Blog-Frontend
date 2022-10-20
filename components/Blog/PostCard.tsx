import { NextPage } from 'next';
import Link from 'next/link';
import { FindPostsQuery_findAllPosts_posts_category } from '../../pages/api/__graphql__/FindPostsQuery';

interface IPostCardProps {
  id: number;
  category: FindPostsQuery_findAllPosts_posts_category | null;
  title: string;
  createdAt: string;
}

const PostCard: NextPage<IPostCardProps> = ({ category, title, createdAt, id }) => {
  return (
    <div className="flex justify-center">
      <div className="block rounded-lg shadow-lg text-center w-full">
        <div className="py-3 px-6 border-b border-gray-300 text-gray-500">
          {category?.id ? (
            <Link href={`/blog/category/${category?.id}`}>
              <a>{category.name}</a>
            </Link>
          ) : (
            '-'
          )}
        </div>
        <div className="p-6 h-36">
          <div className="text-xl break-words">{title}</div>
        </div>
        <Link href={`/blog/${id}`}>
          <div className="inline-flex justify-center rounded-md border border-transparent hover:cursor-pointer mb-5 bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
            Read More
          </div>
        </Link>
        <div className="py-3 px-6 border-t border-gray-300 text-gray-500">{createdAt}</div>
      </div>
    </div>
  );
};

export default PostCard;
