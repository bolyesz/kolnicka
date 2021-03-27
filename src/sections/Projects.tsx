import ProjectColumn from '../components/ProjectColumn';
import ProjectColumnItem from '../components/ProjectColumnItem';
import { Project } from '../types';

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  const leftColumn = projects.filter((_project, index) => index % 2 === 0);
  const rigthColumn = projects.filter((_project, index) => index % 2 === 1);

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <ProjectColumn>
        {leftColumn.map((item) => (
          <ProjectColumnItem alignment="right" project={item} key={item.id} />
        ))}
      </ProjectColumn>
      <ProjectColumn>
        {rigthColumn.map((item) => (
          <ProjectColumnItem alignment="left" project={item} key={item.id} />
        ))}
      </ProjectColumn>
    </div>
  );
}

export default Projects;
