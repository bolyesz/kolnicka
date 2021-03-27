type Props = {
  children: React.ReactNode;
};

function ProjectColumn({ children }: Props) {
  return (
    <div className="flex flex-col lg:w-1/2 lg:first:border-r-2 border-pink-500">
      {children}
    </div>
  );
}

export default ProjectColumn;
