import React from 'react';

import { InfoItem } from '../types';
import InfoBarItem from './InfoBarItem';

type Props = {
  infos: InfoItem[];
};

function InfoBar({ infos }: Props) {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {infos.map((info, index) => {
        const hasPipe = index !== infos.length - 1;

        if (info.link) {
          return (
            <InfoBarItem key={index} hasPipe={hasPipe}>
              <a
                className="hover:underline"
                href={info.link}
                title={info.label}
              >
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
