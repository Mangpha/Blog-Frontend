import dayjs from 'dayjs';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FindPostByIdQuery_findPostById_post } from '../../pages/api/__graphql__/FindPostByIdQuery';
import { SEO } from '../SEO';
import Comment from './Comments';
import MarkDownView from './MarkDownView';

const Post: NextPage<Partial<FindPostByIdQuery_findPostById_post>> = ({ title, category, createdAt, content }) => {
  const router = useRouter();

  return (
    <div className="container_small pt-[10vw] h-full min-h-screen">
      <SEO title={title} />
      <div className="w-full px-10 flex flex-col pb-10">
        <div className="mb-5">
          <span className="cursor-pointer text-3xl px-2 py-1 hover:text-sky-400 hover:dark:text-sky-300 transition-colors" onClick={() => router.back()}>
            &larr;
          </span>
        </div>
        <div className="px-5 divide-y dark:divide-gray-500 mb-36">
          <div className="flex flex-col my-3 px-8">
            <p className="text-lg text-gray-500 mb-3">{category?.name || '-'}</p>
            <p className="text-4xl mb-5">{title}</p>
            <div className="flex">
              <span className="text-gray-500">{dayjs(createdAt).format('YYYY-MM-DD HH:mm')}</span>
            </div>
          </div>
          <MarkDownView content={content || ''} />
        </div>
      </div>
      <hr className="h-px bg-gray-300 border-0 dark:bg-gray-700" />
      <Comment />
    </div>
  );
};

export default Post;
