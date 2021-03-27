import SkillItem from '../components/SkillItem';
import Subtitle from '../components/Subtitle';
import { Skill } from '../types';

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <div className="my-16 p-8 border-pink-500 border-2">
      <Subtitle subtitle="My skillset" />
      <ul className="mt-4 lg:flex lg:flex-wrap">
        {skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </ul>
    </div>
  );
}

export default Skills;
