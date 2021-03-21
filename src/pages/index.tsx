import React from 'react';
import { GetStaticProps } from 'next';

import Layout from '../components/Layout';
import Hero from '../sections/Hero';
import Skills from '../sections/Skills';
import { Skill } from '../types';

type Props = {
  skills: Skill[];
};

export default function Home({ skills }: Props) {
  return (
    <Layout title="Kôlnička">
      <Hero />
      <Skills skills={skills} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const skills = await require('../../data/skills.json');

  return {
    props: {
      skills,
    },
  };
};
