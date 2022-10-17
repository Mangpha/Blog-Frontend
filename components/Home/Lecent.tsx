import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FindPostsQuery } from '../../pages/api/__graphql__/FindPostsQuery';

const PostsList = dynamic(() => import('../Blog/PostsList'), { ssr: false });

interface ILecentProps {
  data: FindPostsQuery;
}

const Lecent: NextPage<ILecentProps> = ({ data }) => {
  const router = useRouter();

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
      <section className="section">
        <div className="container_small">
          <div className="text-2xl mb-10">Lecent Posts</div>
          <PostsList data={data} />
          <div onClick={() => router.push('/blog')} className="text-xl ml-3 cursor-pointer">
            More Posts &rarr;
          </div>
        </div>
      </section>
    </AnimationOnScroll>
  );
};

export default Lecent;
