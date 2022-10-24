import { useQuery } from '@apollo/client';
import React from 'react';
import { Category } from '../components/Blog/Category';
import { Pagination } from '../components/Blog/Pagination';
import PostsList from '../components/Blog/PostsList';
import { SEO } from '../components/SEO';
import { FIND_ALL_CATEGORY_QUERY, FIND_POSTS_QUERY } from './api/gql';
import { FindAllCategoryQuery } from './api/__graphql__/FindAllCategoryQuery';
import { FindPostsQuery, FindPostsQueryVariables } from './api/__graphql__/FindPostsQuery';

const Blog = () => {
  const [page, setPage] = React.useState<number>(1);
  const onNext = () => setPage(() => page + 1);
  const onPrev = () => setPage(() => page - 1);
  const { data: postData } = useQuery<FindPostsQuery, FindPostsQueryVariables>(FIND_POSTS_QUERY, {
    variables: {
      input: {
        page,
        take: 6,
      },
    },
  });
  const { data: categoryData } = useQuery<FindAllCategoryQuery>(FIND_ALL_CATEGORY_QUERY);

  return (
    <div className="h-full min-h-screen">
      <SEO title="Mangpha Dev Blog" />
      <div className="pt-[7vw] w-full justify-center container_small">
        {categoryData && <Category data={categoryData} />}
        <div className="flex flex-col col-span-6 mr-5">
          <PostsList data={postData} />
          <Pagination page={page} onNext={onNext} onPrev={onPrev} totalPages={postData?.findAllPosts.totalPages} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
