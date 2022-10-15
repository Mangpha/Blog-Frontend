import dayjs from 'dayjs';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FindPostsByCategoryQuery } from '../../pages/api/__graphql__/FindPostsByCategoryQuery';

const PostCard = dynamic(() => import('./PostCard'), { ssr: false });

interface ICategoryPostsListProps {
  data: FindPostsByCategoryQuery | undefined;
}

export const CategoryPostsList: NextPage<ICategoryPostsListProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-5 my-5 dark:divide-gray-500">
      {data ? (
        data.findPostByCategory.posts?.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <PostCard category={post.category?.name || '-'} title={post.title} createdAt={dayjs(post.createdAt).format('YYYY-MM-DD HH:mm')} />
          </Link>
        ))
      ) : (
        <div>Posts not found!</div>
      )}
    </div>
  );
};
