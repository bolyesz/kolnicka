import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllProjectIds, getProjectData } from '../../../lib/projects';
import Layout from '../../components/Layout';
import { Project } from '../../types';

type Props = {
  projectData: Project;
};

function ProjectDetail({ projectData }: Props) {
  return (
    <Layout title="Title">
      <div className="h-screen">{`Hi ${projectData.position}`}</div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectData = getProjectData(params?.id as string);

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
