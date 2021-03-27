import Layout from '../components/Layout';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import { Project, Skill } from '../types';

type Props = {
  projects: Project[];
  skills: Skill[];
};

export default function Home({ projects, skills }: Props) {
  return (
    <Layout title="Kôlnička">
      <Hero />
      <Skills skills={skills} />
      <Projects projects={projects} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const projects = await require('../../data/projects.json');
  const skills = await require('../../data/skills.json');

  return {
    props: {
      projects,
      skills,
    },
  };
};
