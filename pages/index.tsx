import { useLazyQuery, useQuery } from '@apollo/client';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Category } from '../components/Blog/Category';
import { Pagination } from '../components/Blog/Pagination';
import PostCard from '../components/Blog/PostCard';
import PostsList from '../components/Blog/PostsList';
import { SEO } from '../components/SEO';
import { FIND_ALL_CATEGORY_QUERY, FIND_POSTS_BY_TITLE, FIND_POSTS_QUERY } from './api/gql';
import { FindAllCategoryQuery } from './api/__graphql__/FindAllCategoryQuery';
import { FindPostsByTitleQuery, FindPostsByTitleQueryVariables } from './api/__graphql__/FindPostsByTitleQuery';
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

  const router = useRouter();
  const { query } = router.query;
  const [searchingData, { data: searchData }] = useLazyQuery<FindPostsByTitleQuery, FindPostsByTitleQueryVariables>(FIND_POSTS_BY_TITLE);

  useEffect(() => {
    if (query && typeof query === 'string') searchingData({ variables: { input: { query } } });
  }, [query]);

  return (
    <div className="h-full min-h-screen">
      <SEO title="Mangpha" />
      <div className="pt-[7vw] w-full justify-center container_small">
        {query && <p>Search: {query}</p>}
        {categoryData && <Category data={categoryData} />}
        <div className="flex flex-col col-span-6 mr-5">
          {!searchData ? (
            <>
              <PostsList data={postData} />
              <Pagination page={page} onNext={onNext} onPrev={onPrev} totalPages={postData?.findAllPosts.totalPages} />
            </>
          ) : (
            <div className="grid grid-cols-3 gap-7 my-5 dark:divide-gray-500">
              {searchData ? (
                searchData.findPostByTitle.posts?.map((post) => (
                  <PostCard id={post.id} key={post.id} category={post.category} title={post.title} createdAt={dayjs(post.createdAt).format('YYYY-MM-DD HH:mm')} />
                ))
              ) : (
                <div>Posts not found!</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
