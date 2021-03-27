import { Skill } from '../types';
import SkillIndicator from './SkillIndicator';

type Props = {
  skill: Skill;
};

function SkillItem({ skill }: Props) {
  return (
    <li className="flex flex-col w-full py-4 lg:py-8 lg:pr-10 lg:w-1/3">
      <h3 className="font-bold text-lg leading-10">{skill.name}</h3>
      <SkillIndicator skillLevel={skill.level} />
    </li>
  );
}

export default SkillItem;
