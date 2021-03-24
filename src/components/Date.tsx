import { format, parseISO } from 'date-fns';

import { DATE_FORMAT } from '../consts';

type Props = {
  dateString: string;
};

function Date({ dateString }: Props) {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, DATE_FORMAT)}</time>;
}

export default Date;
