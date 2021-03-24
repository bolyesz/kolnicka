import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Image from 'next/image';

import { getAllProjectIds, getProjectData } from '../../../lib/projects';
import InfoBar from '../../components/InfoBar';
import Layout from '../../components/Layout';
import Subtitle from '../../components/Subtitle';
import { Project } from '../../types';
import Title from '../../components/Title';
import Date from '../../components/Date';
import Link from 'next/link';

type Props = {
  projectData: Project;
};

function ProjectDetail({ projectData }: Props) {
  return (
    <Layout title={`Project | ${projectData.name}`}>
      <Title title={projectData.name} />
      <Subtitle subtitle={`@ ${projectData.company}`} />

      <div className="font-bold text-lg mt-4">
        <span>as </span>
        <span>{projectData.position}</span>
      </div>

      <div>
        <Date dateString={projectData.timeStart} />
        {` - `}
        <Date dateString={projectData.timeEnd} />
      </div>

      <p className="my-4 text-md leading-5">
        {projectData.description}. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Beatae, quo eos neque consequuntur fugiat ex nisi quod
        incidunt voluptas officia delectus, atque laborum non facere optio
        molestias alias similique quibusdam impedit. Quis atque aliquam
        repudiandae consectetur modi doloremque eos magni est voluptas? Nemo ex
        iusto sunt explicabo dicta itaque repellat.
      </p>

      <Subtitle subtitle="Project showcase" />
      <InfoBar
        infos={projectData.technologies.map((technology) => ({
          label: technology,
        }))}
      />
      <div className="flex flex-col lg:flex-row">
        {projectData.images.map((image, index) => (
          <div
            key={index}
            className="relative lg:w-1/3 w-full h-full my-2 lg:mr-2"
          >
            <Image
              src={image}
              alt="Project motto"
              layout="responsive"
              width={1920}
              height={1080}
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link href="/">
          <a className="text-3xl lg:text-sm font-bold text-pink-500 lg:mr-2">
            ← <span className="hidden lg:inline">Go back</span>
          </a>
        </Link>
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
