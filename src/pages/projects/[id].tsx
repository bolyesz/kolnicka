import { format, parseISO } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Image from 'next/image';

import { getAllProjectIds, getProjectData } from '../../../lib/projects';
import InfoBar from '../../components/InfoBar';
import Layout from '../../components/Layout';
import Subtitle from '../../components/Subtitle';
import { Project } from '../../types';

type Props = {
  projectData: Project;
};

function ProjectDetail({ projectData }: Props) {
  return (
    <Layout title={`Project | ${projectData.name}`}>
      <Subtitle subtitle={projectData.name} />

      <div>
        <span>{format(parseISO(projectData.timeStart), 'dd. MMMM yyyy')}</span>
        <span> - </span>
        <span>{format(parseISO(projectData.timeEnd), 'dd. MMMM yyyy')}</span>
        <span> @ {projectData.company}</span>
      </div>
      <span>{projectData.position}</span>
      <p>{projectData.description}</p>

      <h3>Used technologies</h3>
      <InfoBar
        infos={projectData.technologies.map((technology) => ({
          label: technology,
        }))}
      />
      <div className="flex">
        {projectData.images.map((image, index) => (
          <div key={index} className="relative w-96 h-96 mr-2">
            <Image
              src={image}
              alt="Project motto"
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}

type Params = {
  id: string;
};

export const getStaticProps: GetStaticProps<
  Record<string, unknown>,
  Params
> = async ({ params }) => {
  const projectData = getProjectData(params?.id);

  return {
    props: {
      projectData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectIds();

  return {
    paths,
    fallback: false,
  };
};

export default ProjectDetail;
