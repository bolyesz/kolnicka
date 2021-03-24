type Props = {
  subtitle: string;
};

function Subtitle({ subtitle }: Props) {
  return (
    <h2 className="text-3xl font-bold py-3 text-pink-500 text-center lg:text-left">
      {subtitle}
    </h2>
  );
}

export default Subtitle;
