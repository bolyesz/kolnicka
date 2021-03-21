import Image from 'next/image';
import React from 'react';
import InfoBar from '../components/InfoBar';

function Hero() {
  return (
    <div>
      <Image
        src="/images/HeroHerold.jpeg"
        alt="Profile picture"
        width="400px"
        height="400px"
      />
      <h2 className="text-6xl">Michal Sojka</h2>
      <InfoBar
        infos={[
          { label: 'sojka@cngroup.dk' },
          { label: '+421 999 123 456' },
          { label: 'GitHub', link: 'https://github.com/Majky336' },
        ]}
      />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi non soluta
        aut debitis eius laudantium labore aliquid. Ex dolor dolorem minus
        explicabo ad maxime atque velit ut tempora porro placeat quae quidem,
        consequatur, magni a vero veritatis ullam ab quaerat molestiae
        laudantium distinctio delectus repellat quo! Facilis voluptatibus
        laboriosam odio?
      </div>
      <InfoBar
        infos={[
          { label: 'Vajanského 21' },
          { label: '984 01' },
          { label: 'Lučenec' },
          { label: 'Slovakia' },
        ]}
      />
    </div>
  );
}

export default Hero;
