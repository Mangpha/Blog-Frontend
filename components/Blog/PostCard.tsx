import { NextPage } from 'next';

interface IPostCardProps {
  category: string;
  title: string;
  createdAt: string;
}

const PostCard: NextPage<IPostCardProps> = ({ category, title, createdAt }) => {
  return (
    <a className="py-6 px-5 max-w-sm rounded overflow-hidden shadow-xl scale-90 hover:scale-100 transition-transform duration-200">
      <p className="text-md mb-3 text-gray-500">{category}</p>
      <p className="text-3xl mb-5">{title}</p>
      <div className="flex justify-end">
        <span className="text-md text-gray-500">{createdAt}</span>
      </div>
    </a>
  );
};

export default PostCard;
