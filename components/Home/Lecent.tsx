import { NextPage } from 'next';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FindPostsQuery } from '../../pages/api/__graphql__/FindPostsQuery';
import { PostsList } from '../Blog/PostsList';
// import { PostsList } from '../Blog/PostsList';

interface ILecentProps {
  data: FindPostsQuery;
}

const Lecent: NextPage<ILecentProps> = ({ data }) => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
      <section className="section">
        <div className="container_small">
          <div className="text-2xl mb-10">Lecent Posts</div>
          <PostsList data={data} />
          <div className="text-xl ml-3">More Posts &rarr;</div>
        </div>
      </section>
    </AnimationOnScroll>
  );
};

export default Lecent;
