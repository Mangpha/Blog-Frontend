import { Intro } from '../components/Home/Intro';
import { Portfolio } from '../components/Home/Project';
import { SEO } from '../components/SEO';
import 'animate.css/animate.min.css';
import Lecent from '../components/Home/Lecent';

const Home = () => {
  return (
    <div>
      <SEO title="Home" description="Mangpha Dev Blog" />
      <Intro />
      <Portfolio />
      <Lecent data={null} />
    </div>
  );
};

export default Home;
