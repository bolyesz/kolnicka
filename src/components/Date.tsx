import { format, parseISO } from 'date-fns';

type Props = {
  dateString: string;
};

const DATE_FORMAT = 'dd. MMMM yyyy';

function Date({ dateString }: Props) {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, DATE_FORMAT)}</time>;
}

export default Date;
