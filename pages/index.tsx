import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Intro } from '../components/Home/Intro';
import { Portfolio } from '../components/Home/Project';
import { SEO } from '../components/SEO';
import 'animate.css/animate.min.css';
import Lecent from '../components/Home/Lecent';
import { client } from '../apollo';
import { FindPostsQuery, FindPostsQueryVariables } from './api/__graphql__/FindPostsQuery';
import { FIND_POSTS_QUERY } from './api/gql';
import { useRouter } from 'next/router';
import { Loading } from '../components/Loading';

export const getStaticProps: GetStaticProps = async () => {
  const { data: postCache } = await client.query<FindPostsQuery, FindPostsQueryVariables>({
    query: FIND_POSTS_QUERY,
    variables: {
      input: {
        page: 1,
      },
    },
  });

  return {
    props: {
      postCache,
    },
  };
};

const Home = ({ postCache }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if(router.isFallback) return <Loading />

  return (
    <div>
      <SEO title="Home" description="Mangpha Dev Blog" />
      <Intro />
      <Portfolio />
      <Lecent data={postCache} />
    </div>
  );
};

export default Home;
