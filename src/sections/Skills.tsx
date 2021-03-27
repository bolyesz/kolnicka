import Subtitle from '../components/Subtitle';
import { Skill } from '../types';

type Props = {
  skills: Skill[];
};

const MAX_SKILL_LEVEL = 10;

function Skills({ skills }: Props) {
  return (
    <div className="my-16 p-8 border-pink-500 border-2">
      <Subtitle subtitle="My skillset" />
      <ul className="mt-4 lg:flex lg:flex-wrap">
        {skills.map((skill) => (
          <li
            className="flex flex-col w-full py-4 lg:py-8 lg:pr-10 lg:w-1/3"
            key={skill.name}
          >
            <h3 className="font-bold text-lg leading-10">{skill.name}</h3>
            <div className="grid grid-cols-10 gap-x-0.5 sm:gap-x-1 w-full">
              {[...Array(MAX_SKILL_LEVEL).keys()].map((index) => {
                const isFilled = index < skill.level;
                const color = isFilled ? 'bg-pink-500' : 'bg-gray-500';

                return <div key={index} className={`${color} h-2`} />;
              })}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
