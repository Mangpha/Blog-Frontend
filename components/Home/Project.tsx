import Link from 'next/link';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { projectsData } from '../../data/projectData';
import { Project } from '../Project/Project';

export const Portfolio = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
      <section className="section">
        <div className="container_small">
          <div className="text-4xl mb-[100px]">Projects</div>
          <div className="flex flex-wrap justify-center">
            {projectsData.slice(0, 3).map((project, idx) => (
              <Project key={idx} title={project.title} img={project.img} date={project.date} position={project.position} github={project.github} />
            ))}
          </div>
          <div className="mt-7">
            <Link href="/projects">
              <a className="text-xl">My More Projects &rarr;</a>
            </Link>
          </div>
        </div>
      </section>
    </AnimationOnScroll>
  );
};
