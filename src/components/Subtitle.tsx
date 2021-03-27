type Props = {
  subtitle: string;
};

function Subtitle({ subtitle }: Props) {
  return <h2 className="text-3xl font-bold text-pink-500 py-3">{subtitle}</h2>;
}

export default Subtitle;
