import dayjs from 'dayjs';
import { NextPage } from 'next';
import { FindPostsByCategoryQuery } from '../../pages/api/__graphql__/FindPostsByCategoryQuery';
import PostCard from './PostCard';

interface ICategoryPostsListProps {
  data: FindPostsByCategoryQuery | undefined;
}

export const CategoryPostsList: NextPage<ICategoryPostsListProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-5 my-5 dark:divide-gray-500">
      {data ? (
        data.findPostByCategory.posts?.map((post) => (
          <PostCard id={post.id} key={post.id} category={post.category} title={post.title} createdAt={dayjs(post.createdAt).format('YYYY-MM-DD HH:mm')} />
        ))
      ) : (
        <div>Posts not found!</div>
      )}
    </div>
  );
};
