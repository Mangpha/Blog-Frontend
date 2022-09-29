import { NextPage } from 'next';

interface IErrorMessageProps {
  error: string;
}

export const ErrorMessage: NextPage<IErrorMessageProps> = ({ error }) => {
  return <span className="my-3 text-red-400 dark:text-red-300">{error}</span>;
};
