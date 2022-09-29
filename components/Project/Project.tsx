import { NextPage } from 'next';
import React from 'react';
import { IProjectProps } from '../../data/projectData';
import { ProjectModal } from './ProjectModal';

export const Project: NextPage<IProjectProps> = ({ title, img, date, ...props }) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  return (
    <>
      <div className="project_section" onClick={() => setOpen(true)}>
        <img src={img} alt="" className="project_image" />
        <div className="absolute hover:bg-black opacity-0 hover:opacity-70 w-full h-full transition-all ease-in-out p-10 text-white">
          <p className="mb-5 text-2xl font-bold">{title}</p>
          <p className="mb-10">{date}</p>
          <p>Project Detail &rarr;</p>
        </div>
      </div>
      <ProjectModal isOpen={isOpen} closeModal={() => setOpen(false)} projectData={{ title, img, date, ...props }} />
    </>
  );
};
