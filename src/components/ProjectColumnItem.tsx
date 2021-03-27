import React from 'react';
import { Project } from '../types';
import Link from 'next/link';

type Props = {
  alignment: 'left' | 'right';
  project: Project;
};

function ProjectColumnItem({ alignment, project }: Props) {
  const classNames =
    alignment === 'left'
      ? 'lg:text-left lg:ml-16 lg:mt-20'
      : 'lg:text-right lg:mr-16 lg:mb-20';

  return (
    <div className={`${classNames} text-center mb-8`}>
      <Link href={`/projects/${project.id}`}>
        <a className="font-bold text-lg text-pink-500 leading-10">
          {project.name}
        </a>
      </Link>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectColumnItem;
