import { MarkDownView } from '../../components/Blog/MarkDownView';
import dayjs from 'dayjs';
import { DiscussionEmbed } from 'disqus-react';
import { useRouter } from 'next/router';
import { SEO } from '../../components/SEO';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { FindPostByIdQuery, FindPostByIdQueryVariables } from '../api/__graphql__/FindPostByIdQuery';
import { client } from '../../apollo';
import { FIND_POSTS_QUERY, FIND_POST_BY_ID } from '../api/gql';
import { FindPostsQuery, FindPostsQueryVariables } from '../api/__graphql__/FindPostsQuery';

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { data } = await client.query<FindPostByIdQuery, FindPostByIdQueryVariables>({
    query: FIND_POST_BY_ID,
    variables: {
      input: {
        id: Number(context.params?.id),
      },
    },
  });

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: {
      findAllPosts: { posts },
    },
  } = await client.query<FindPostsQuery, FindPostsQueryVariables>({
    query: FIND_POSTS_QUERY,
    variables: {
      input: {
        take: 50,
      },
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const paths = posts!.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

const Post = ({ data }: { data: FindPostByIdQuery }) => {
  const router = useRouter();

  return (
    <div className="container_small pt-[10vw] h-full min-h-screen">
      <SEO title={`${data?.findPostById.post?.title}`} />
      <div className="w-full px-10 flex flex-col pb-10">
        <div className="mb-5">
          <span className="cursor-pointer text-3xl px-2 py-1 hover:text-sky-400 hover:dark:text-sky-300 transition-colors" onClick={() => router.back()}>
            &larr;
          </span>
        </div>
        <div className="px-5 divide-y dark:divide-gray-500 mb-36">
          <div className="flex flex-col my-3 px-8">
            <p className="text-lg text-gray-500 mb-3">{data?.findPostById.post?.category?.name || '-'}</p>
            <p className="text-4xl mb-5">{data?.findPostById.post?.title}</p>
            <div className="flex">
              <span className="text-gray-500">{dayjs(data?.findPostById.post?.createdAt).format('YYYY-MM-DD HH:mm')}</span>
            </div>
          </div>
          <MarkDownView content={data.findPostById.post?.content || ''} />
        </div>
        <div className="section container_small text-black dark:text-white">
          <DiscussionEmbed
            shortname="mangpha-com"
            config={{
              language: 'ko',
              url: 'https://mangpha.dev',
              identifier: data.findPostById.post?.id.toString(),
              title: data.findPostById.post?.title,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
