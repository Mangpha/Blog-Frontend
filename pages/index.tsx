import type { NextPage } from 'next';
import { Loading } from '../components/Loading';

const Home: NextPage = () => {
  return (
    <div>
      <Loading />
    </div>
  );
};

export default Home;
// "tailwind:build": "NODE_ENV=production npx tailwindcss -i styles/tailwind.css -o styles/global.css --minify",
// 		"tailwind:dev": "npx tailwindcss -i styles/tailwind.css -o styles/global.css --minify --watch",
