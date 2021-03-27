const MAX_SKILL_LEVEL = 10;

type Props = {
  skillLevel: number;
};

function SkillIndicator({ skillLevel }: Props) {
  return (
    <div className="grid grid-cols-10 gap-x-0.5 sm:gap-x-1 w-full">
      {[...Array(MAX_SKILL_LEVEL).keys()].map((index) => {
        const isFilled = index < skillLevel;
        const color = isFilled ? 'bg-pink-500' : 'bg-gray-500';

        return <div key={index} className={`${color} h-2`} />;
      })}
    </div>
  );
}

export default SkillIndicator;
