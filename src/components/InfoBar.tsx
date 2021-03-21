import React from 'react';
import InfoBarItem from './InfoBarItem';

type Props = {
  infos: InfoItem[];
};

type InfoItem = {
  label: string;
  link?: string;
};

function InfoBar({ infos }: Props) {
  return (
    <div>
      {infos.map((info, index) => {
        const hasPipe = index !== infos.length - 1;

        if (info.link) {
          return (
            <InfoBarItem key={index} hasPipe={hasPipe}>
              <a href={info.link} title={info.label}>
                {info.label}
              </a>
            </InfoBarItem>
          );
        }

        return (
          <InfoBarItem key={index} hasPipe={hasPipe}>
            {info.label}
          </InfoBarItem>
        );
      })}
    </div>
  );
}

export default InfoBar;
