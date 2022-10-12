import { GetStaticPaths, GetStaticProps } from 'next';
import { FindPostByIdQuery, FindPostByIdQueryVariables } from '../api/__graphql__/FindPostByIdQuery';
import { client } from '../../apollo';
import { FIND_POSTS_QUERY, FIND_POST_BY_ID } from '../api/gql';
import { FindPostsQuery, FindPostsQueryVariables } from '../api/__graphql__/FindPostsQuery';
import { ParsedUrlQuery } from 'querystring';
import Post from '../../components/Blog/Post';

interface IParams extends ParsedUrlQuery {
  blogId: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { blogId } = context.params as IParams;
    const { data } = await client.query<FindPostByIdQuery, FindPostByIdQueryVariables>({
      query: FIND_POST_BY_ID,
      variables: {
        input: {
          id: Number(blogId),
        },
      },
    });

    if (data.findPostById.post === null) return { notFound: true };

    return {
      props: {
        data,
      },
      revalidate: 10,
    };
  } catch (e) {
    console.log(e);
    return { notFound: true };
  }
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
        take: 10000,
      },
    },
  });

  const paths = posts
    ? posts.map((post) => ({
        params: { blogId: post.id.toString() },
      }))
    : [];

  return {
    paths,
    fallback: 'blocking',
  };
};

const Blog = ({ data }: { data: FindPostByIdQuery }) => {
  return (
    <Post
      id={data.findPostById.post?.id}
      title={data.findPostById.post?.title}
      content={data.findPostById.post?.content}
      category={data.findPostById.post?.category}
      createdAt={data.findPostById.post?.createdAt}
    />
  );
};

export default Blog;
