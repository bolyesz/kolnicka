import Subtitle from '../components/Subtitle';
import { Project } from '../types';

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <div>
      <Subtitle subtitle="Past projects" />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
