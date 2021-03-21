import React from 'react';

import SkillItem from '../components/SkillItem';
import { Skill } from '../types';

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <div>
      <h2 className="text-4xl">My skillset</h2>
      <ul>
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </ul>
    </div>
  );
}

export default Skills;
