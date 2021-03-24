import { MAX_NO_ITEMS } from '../consts';

type Props = {
  skillLevel: number;
};

function SkillIndicator({ skillLevel }: Props) {
  return (
    <div className="grid gap-x-0.5 sm:gap-x-1 grid-cols-10 w-full">
      {[...Array(MAX_NO_ITEMS).keys()].map((index) => {
        const isFilled = index < skillLevel;
        const color = isFilled ? 'bg-pink-500' : 'bg-gray-400';

        return <div key={index} className={`${color} h-2`} />;
      })}
    </div>
  );
}

export default SkillIndicator;
