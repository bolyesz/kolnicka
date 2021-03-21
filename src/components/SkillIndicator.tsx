type Props = {
  skillLevel: number;
};

const MAX_NO_ITEMS = 10;

function SkillIndicator({ skillLevel }: Props) {
  return (
    <div className="grid gap-x-0.5 sm:gap-x-1 grid-cols-10 w-full">
      {[...Array(MAX_NO_ITEMS).keys()].map((index) => {
        const isFilled = index < skillLevel;
        const color = isFilled ? 'bg-pink-500' : 'bg-gray-500';

        return <div key={index} className={`${color} h-1`} />;
      })}
    </div>
  );
}

export default SkillIndicator;
