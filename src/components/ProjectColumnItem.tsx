import Link from 'next/link';
import React from 'react';

import { Project } from '../types';

type Props = {
  alignment: 'left' | 'right';
  project: Project;
};

function ProjectColumnItem({ alignment, project }: Props) {
  const margin =
    alignment === 'left'
      ? 'lg:mb-20 lg:mr-16 lg:text-right'
      : 'lg:mt-20 lg:ml-16 lg:text-left';

  return (
    <div className={`text-center mb-8 ${margin}`}>
      <Link href={`/projects/${project.id}`}>
        <a className="font-bold text-lg text-pink-500 hover:underline leading-10">
          {project.name}
        </a>
      </Link>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectColumnItem;
