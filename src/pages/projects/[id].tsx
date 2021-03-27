import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllProjectIds, getProjectData } from '../../../lib/projects';
import Layout from '../../components/Layout';
import Subtitle from '../../components/Subtitle';
import { Project } from '../../types';

type Props = {
  projectData: Project;
};

function ProjectDetail({ projectData }: Props) {
  return (
    <Layout title={`Kôlnička | ${projectData.name}`}>
      <Subtitle subtitle={`Hi ${projectData.position}`} />
      <div className="h-screen" />
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
