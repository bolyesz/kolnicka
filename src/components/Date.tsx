import { format, parseISO } from 'date-fns';

type Props = {
  dateString: string;
};

const DEFAULT_FORMAT = 'dd. MMMM yyyy';

function Date({ dateString }: Props) {
  return (
    <time dateTime={dateString}>
      {format(parseISO(dateString), DEFAULT_FORMAT)}
    </time>
  );
}

export default Date;
