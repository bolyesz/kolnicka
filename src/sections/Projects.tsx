import React from 'react';

import ProjectColumn from '../components/ProjectColumn';
import ProjectColumnItem from '../components/ProjectColumnItem';
import Subtitle from '../components/Subtitle';
import { Project } from '../types';

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  const leftColumn = projects.filter((_project, index) => index % 2 === 0);
  const rightColumn = projects.filter((_project, index) => index % 2 === 1);

  return (
    <div>
      <div className="flex w-full justify-center mb-4">
        <Subtitle subtitle="Past projects" />
      </div>
      <div className="flex flex-col lg:flex-row">
        <ProjectColumn>
          {leftColumn.map((item) => (
            <ProjectColumnItem key={item.id} project={item} alignment="left" />
          ))}
        </ProjectColumn>
        <ProjectColumn>
          {rightColumn.map((item) => (
            <ProjectColumnItem key={item.id} project={item} alignment="right" />
          ))}
        </ProjectColumn>
      </div>
    </div>
  );
}

export default Projects;
