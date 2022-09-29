import { NextPage } from 'next';
import React from 'react';

export const TopButton: NextPage = () => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    const handleVisible = () => {
      if (window.scrollY > 500) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener('scroll', handleVisible);
    return () => {
      window.removeEventListener('scroll', handleVisible);
    };
  }, []);

  return (
    <div>
      <i
        className={`fa-solid fa-arrow-up-long ${
          visible ? 'visible' : 'invisible opacity-0'
        } bg-white dark:bg-black transition-all duration-300 p-3 fixed bottom-[2vw] right-[2vw] cursor-pointer z-50 border-2 border-gray-500 rounded-full dark:text-white`}
        onClick={handleScroll}
      ></i>
    </div>
  );
};
