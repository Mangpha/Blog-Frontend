import React from 'react';
import { Category } from '../../components/Blog/Category';
import { Pagination } from '../../components/Blog/Pagination';
import { PostsList } from '../../components/Blog/PostsList';
import { SEO } from '../../components/SEO';

const Blog = () => {
  const [page, setPage] = React.useState<number>(1);
  const onNext = () => setPage(() => page + 1);
  const onPrev = () => setPage(() => page - 1);

  return (
    <div className="h-full min-h-screen">
      <SEO title="Blog" />
      <div className="pt-[10vw] w-full justify-center grid-cols-7 grid grid-flow-row-dense container_small">
        <div className="flex flex-col col-span-6 mr-5">
          <PostsList />
          <Pagination page={page} onNext={onNext} onPrev={onPrev} totalPages={1} />
        </div>
        {/* {categoryData && <Category data={categoryData} />} */}
      </div>
    </div>
  );
};

export default Blog;
