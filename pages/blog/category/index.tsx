import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useState } from 'react';
import { Category } from '../../../components/Blog/Category';
import { CategoryPostsList } from '../../../components/Blog/CategoryPostsList';
import { Pagination } from '../../../components/Blog/Pagination';
import { Loading } from '../../../components/Loading';
import { SEO } from '../../../components/SEO';

const CategoryPosts = () => {
  const router = useRouter();
  const { categoryId } = router.query;
  if (router.isFallback) return <Loading />;
  const [page, setPage] = useState<number>(1);
  const onNext = () => setPage(() => page + 1);
  const onPrev = () => setPage(() => page - 1);

  return (
    <div className="container_small section min-h-screen">
      <SEO title="Blog" />
      <div className="text-2xl">Search Category: </div>

      <div className="w-full justify-center grid-cols-7 grid grid-flow-row-dense">
        <div className="flex flex-col col-span-6 mr-5">
          <CategoryPostsList />
          <Pagination page={page} onNext={onNext} onPrev={onPrev} totalPages={1} />
        </div>
        {/* {categoryData && <Category data={categoryData} selectId={Number(categoryId)} />} */}
      </div>
    </div>
  );
};

export default CategoryPosts;
