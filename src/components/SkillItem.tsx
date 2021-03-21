import { Skill } from '../types';

type Props = {
  skill: Skill;
};

const MAX_NO_ITEMS = 10;

function SkillItem({ skill }: Props) {
  return (
    <li className="flex flex-col w-full py-4 lg:py-8 lg:pr-12 lg:w-1/3">
      <h3 className="font-bold text-lg leading-10">{skill.name}</h3>
      <div className="grid gap-x-0.5 sm:gap-x-1 grid-cols-10 w-full">
        {[...Array(MAX_NO_ITEMS).keys()].map((index) => {
          const isFilled = index < skill.level;
          const color = isFilled ? 'bg-pink-500' : 'bg-gray-500';

          return <div key={index} className={`${color} h-1`} />;
        })}
      </div>
    </li>
  );
}

export default SkillItem;
