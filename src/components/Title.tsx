type Props = {
  title: string;
};

function Title({ title }: Props) {
  return (
    <h1 className="text-5xl text-center lg:text-left font-bold text-pink-500">
      {title}
    </h1>
  );
}

export default Title;
