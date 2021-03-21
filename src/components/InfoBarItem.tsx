import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ hasPipe: boolean }>;

function InfoBarItem({ children, hasPipe }: Props) {
  return (
    <span>
      {children}
      {hasPipe && ` | `}
    </span>
  );
}

export default InfoBarItem;
