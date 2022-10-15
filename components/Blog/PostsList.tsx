import React from 'react';
import dayjs from 'dayjs';
import { FindPostsQuery } from '../../pages/api/__graphql__/FindPostsQuery';
import { NextPage } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const PostCard = dynamic(() => import('./PostCard'), { ssr: false });

interface IPostsListProps {
  data: FindPostsQuery | undefined;
}

export const PostsList: NextPage<IPostsListProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-5 my-5 dark:divide-gray-500">
      {data ? (
        data.findAllPosts.posts?.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <a>
              <PostCard category={post.category?.name || '-'} title={post.title} createdAt={dayjs(post.createdAt).format('YYYY-MM-DD HH:mm')} />
            </a>
          </Link>
        ))
      ) : (
        <div>Posts not found!</div>
      )}
    </div>
  );
};
