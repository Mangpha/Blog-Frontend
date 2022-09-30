import { useQuery } from '@apollo/client';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { client } from '../../apollo';
import { Category } from '../../components/Blog/Category';
import { Pagination } from '../../components/Blog/Pagination';
import { PostsList } from '../../components/Blog/PostsList';
import { Loading } from '../../components/Loading';
import { SEO } from '../../components/SEO';
import { FIND_ALL_CATEGORY_QUERY, FIND_POSTS_QUERY } from '../api/gql';
import { FindAllCategoryQuery } from '../api/__graphql__/FindAllCategoryQuery';
import { FindPostsQuery, FindPostsQueryVariables } from '../api/__graphql__/FindPostsQuery';

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: postCache } = await client.query<FindPostsQuery, FindPostsQueryVariables>({
    query: FIND_POSTS_QUERY,
    variables: {
      input: {},
    },
  });
  const { data: categoryCache } = await client.query<FindAllCategoryQuery>({
    query: FIND_ALL_CATEGORY_QUERY,
  });

  return {
    props: {
      postCache,
      categoryCache,
    },
  };
};

const Blog = ({ postCache, categoryCache }: { postCache: FindPostsQuery; categoryCache: FindAllCategoryQuery }) => {
  const [page, setPage] = React.useState<number>(1);
  const router = useRouter();
  const onNext = () => setPage(() => page + 1);
  const onPrev = () => setPage(() => page - 1);
  const { data: postData, loading: postLoading } = useQuery<FindPostsQuery, FindPostsQueryVariables>(FIND_POSTS_QUERY, {
    variables: {
      input: {
        page,
      },
    },
  });
  const { data: categoryData } = useQuery<FindAllCategoryQuery>(FIND_ALL_CATEGORY_QUERY);

  if (router.isFallback || postLoading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <div className="h-full min-h-screen">
      <SEO title="Blog" />
      <div className="pt-[10vw] w-full justify-center grid-cols-7 grid grid-flow-row-dense container_small">
        <div className="flex flex-col col-span-6 mr-5">
          <PostsList data={!postData ? postCache : postData} />
          <Pagination page={page} onNext={onNext} onPrev={onPrev} totalPages={postData?.findAllPosts.totalPages} />
        </div>
        {categoryData && <Category data={!categoryData ? categoryCache : categoryData} />}
      </div>
    </div>
  );
};

export default Blog;
