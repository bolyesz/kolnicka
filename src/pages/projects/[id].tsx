import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllProjectIds, getProjectData } from '../../../lib/projects';
import Layout from '../../components/Layout';
import Subtitle from '../../components/Subtitle';
import { Project } from '../../types';
import Image from 'next/image';
import InfoBar from '../../components/InfoBar';
import Title from '../../components/Title';
import Date from '../../components/Date';

type Props = {
  projectData: Project;
};

function ProjectDetail({ projectData }: Props) {
  return (
    <Layout title={`Kôlnička | ${projectData.name}`}>
      <Title title={projectData.name} />
      <Subtitle subtitle={`@ ${projectData.company}`} />

      <div className="font-bold text-lg mt-4">
        <span>as {projectData.position}</span>
      </div>

      <div>
        <Date dateString={projectData.timeStart} />
        {' - '}
        <Date dateString={projectData.timeEnd} />
      </div>

      <p className="my-4 text-lg leading-6">{projectData.description}</p>

      <Subtitle subtitle="Project showcase" />

      <InfoBar
        infos={projectData.technologies.map((technology) => ({
          label: technology,
        }))}
      />

      <div className="flex flex-col lg:flex-row">
        {projectData.images.map((image, index) => (
          <div key={index} className="relative w-full my-2 lg:mr-2">
            <Image
              src={image}
              layout="responsive"
              width="1920px"
              height="1080px"
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectData = getProjectData(params?.id as string);

  return {
    props: {
      projectData,
    },
  };
};

export default ProjectDetail;
