type Props = {
  subtitle: string;
};

function Subtitle({ subtitle }: Props) {
  return <h2 className="text-4xl font-bold py-3 text-pink-500">{subtitle}</h2>;
}

export default Subtitle;
