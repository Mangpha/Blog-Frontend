import { NextPage } from 'next';

interface IButtonProps {
  canClick: boolean;
  loading: boolean;
  text: string;
}

export const Button: NextPage<IButtonProps> = ({ canClick, loading, text }) => {
  return <button className={`mt-5 py-[1vw] ${canClick ? 'btn' : 'btn_loading'} justify-center`}>{loading ? 'Loading...' : text}</button>;
};
