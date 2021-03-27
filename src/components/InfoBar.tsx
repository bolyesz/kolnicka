import React from 'react';
import { Info } from '../types';
import InfoBarItem from './InfoBarItem';

type Props = {
  infos: Info[];
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
