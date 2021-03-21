import React from 'react';
import { GetStaticProps } from 'next';

import Layout from '../components/Layout';
import Hero from '../sections/Hero';
import Skills from '../sections/Skills';
import { Project, Skill } from '../types';
import Projects from '../sections/Projects';

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

export const getStaticProps: GetStaticProps = async () => {
  const mockSkills = [
    { name: 'HTML', level: 8 },
    { name: 'CSS', level: 6 },
    { name: 'React', level: 10 },
    { name: 'Next.js', level: 5 },
    { name: 'TypeScript', level: 7 },
    { name: 'Tailwind', level: 3 },
  ];

  const projectData = await require('../../projects/projects.json');

  return {
    props: {
      projects: projectData,
      skills: mockSkills,
    },
  };
};
