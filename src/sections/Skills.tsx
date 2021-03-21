import React from 'react';

import SkillItem from '../components/SkillItem';
import { Skill } from '../types';

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <div className="my-16 p-8 border-pink-500 border-2">
      <h2 className="text-4xl font-bold text-pink-500">My skillset</h2>
      <ul className="mt-4 lg:flex lg:flex-wrap">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </ul>
    </div>
  );
}

export default Skills;
