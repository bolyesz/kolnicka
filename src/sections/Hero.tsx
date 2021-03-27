import React from 'react';
import Image from 'next/image';
import InfoBar from '../components/InfoBar';

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex justify-center lg:w-1/3">
        <Image
          className="rounded-full"
          src="/images/harold-profile.jpg"
          width="250px"
          height="250px"
        />
      </div>
      <div className="flex flex-col lg:w-2/3 items-center lg:items-start">
        <h2 className="text-4xl font-bold text-pink-500 pb-3">Michal Sojka</h2>
        <InfoBar
          infos={[
            {
              label: 'bolya@cngroup.dk',
              link: 'mailto:bolya@cngroup.dk',
            },
            {
              label: '+421 888 456 123',
              link: 'tel:+421 888 456 123',
            },
            {
              label: 'Github',
              link: 'https://www.github.com/bolyesz',
            },
          ]}
        />
        <div className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          voluptatum amet maiores dicta ipsam explicabo veritatis accusamus
          officia quos fuga. Esse voluptas inventore reprehenderit saepe vero
          facilis impedit voluptate nihil cum! Quia laboriosam consequuntur
          praesentium nulla a mollitia atque voluptatem quibusdam, amet quaerat
          eum dicta sapiente soluta accusantium veritatis nihil!
        </div>
        <InfoBar
          infos={[
            { label: 'Vajanskeho 20' },
            { label: 'Bratislava' },
            { label: '843 12' },
            { label: 'Slovakia' },
          ]}
        />
      </div>
    </div>
  );
}

export default Hero;
