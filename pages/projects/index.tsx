import { Project } from '../../components/Project/Project';
import { SEO } from '../../components/SEO';
import { projectsData } from '../../data/projectData';

const Projects = () => {
  return (
    <div className="section h-full min-h-screen">
      <SEO title="Projects" />
      <div className="container_small">
        <div className="text-4xl mb-[100px]">Projects</div>
        <div className="flex flex-wrap justify-center">
          {projectsData.map((project, idx) => (
            <Project key={idx} title={project.title} img={project.img} date={project.date} position={project.position} github={project.github} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
