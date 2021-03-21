import Image from 'next/image';
import React from 'react';
import InfoBar from '../components/InfoBar';
import Subtitle from '../components/Subtitle';

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <div className="flex justify-center lg:w-2/6">
        <Image
          className="rounded-full"
          src="/images/harold-profile.jpg"
          alt="Profile picture"
          width={250}
          height={250}
        />
      </div>
      <div className="flex flex-col items-center lg:items-start lg:w-4/6">
        <Subtitle subtitle="Michal Sojka" />
        <InfoBar
          infos={[
            { label: 'sojka@cngroup.dk', link: 'mailto:sojka@cngroup.dk' },
            { label: '+421 999 123 456', link: 'tel:+421 999 123 456' },
            { label: 'GitHub', link: 'https://github.com/Majky336' },
          ]}
        />
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi non
          soluta aut debitis eius laudantium labore aliquid. Ex dolor dolorem
          minus explicabo ad maxime atque velit ut tempora porro placeat quae
          quidem, consequatur, magni a vero veritatis ullam ab quaerat molestiae
          laudantium distinctio delectus repellat quo! Facilis voluptatibus
          laboriosam odio?
        </p>
        <InfoBar
          infos={[
            { label: 'Vajanského 21' },
            { label: '984 01' },
            { label: 'Lučenec' },
            { label: 'Slovakia' },
          ]}
        />
      </div>
    </div>
  );
}

export default Hero;
