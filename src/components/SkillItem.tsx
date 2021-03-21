import { Skill } from '../types';

type Props = {
  skill: Skill;
};

function SkillItem({ skill }: Props) {
  return <li>{`${skill.name}-${skill.level}`}</li>;
}

export default SkillItem;
