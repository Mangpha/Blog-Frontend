import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useState } from 'react';
import { client } from '../../../../apollo';
import { Category } from '../../../../components/Blog/Category';
import { CategoryPostsList } from '../../../../components/Blog/CategoryPostsList';
import { Pagination } from '../../../../components/Blog/Pagination';
import { Loading } from '../../../../components/Loading';
import { SEO } from '../../../../components/SEO';
import { FIND_ALL_CATEGORY_QUERY, FIND_POSTS_BY_CATEGORY_QUERY } from '../../../api/gql';
import { FindAllCategoryQuery } from '../../../api/__graphql__/FindAllCategoryQuery';
import { FindPostsByCategoryQuery, FindPostsByCategoryQueryVariables } from '../../../api/__graphql__/FindPostsByCategoryQuery';

interface IParams extends ParsedUrlQuery {
  categoryId: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { categoryId } = context.params as IParams;
  const { data: postData } = await client.query<FindPostsByCategoryQuery, FindPostsByCategoryQueryVariables>({
    query: FIND_POSTS_BY_CATEGORY_QUERY,
    variables: {
      input: {
        categoryId: Number(categoryId),
      },
    },
  });
  const { data: categoryData } = await client.query<FindAllCategoryQuery>({
    query: FIND_ALL_CATEGORY_QUERY,
  });

  if (categoryData.findAllCategories.categories === null) return { notFound: true };

  return {
    props: {
      postData,
      categoryData,
    },
    revalidate: 3600,
  };
};

const CategoryPosts = ({ postData, categoryData }: { postData: FindPostsByCategoryQuery; categoryData: FindAllCategoryQuery }) => {
  const router = useRouter();
  const { categoryId } = router.query;
  if (router.isFallback) return <Loading />;
  const [page, setPage] = useState<number>(1);
  const onNext = () => setPage(() => page + 1);
  const onPrev = () => setPage(() => page - 1);

  return (
    <div className="container_small section min-h-screen">
      <SEO title="Blog" />
      <div className="text-2xl">Search Category: {categoryData?.findAllCategories.categories?.find((category) => category.id === Number(categoryId))?.name}</div>

      <div className="w-full justify-center grid-cols-7 grid grid-flow-row-dense">
        <div className="flex flex-col col-span-6 mr-5">
          <CategoryPostsList data={postData} />
          <Pagination page={page} onNext={onNext} onPrev={onPrev} totalPages={postData?.findPostByCategory.totalPages} />
        </div>
        {categoryData && <Category data={categoryData} selectId={Number(categoryId)} />}
      </div>
    </div>
  );
};

export default CategoryPosts;
