import Image from 'next/image';
import React from 'react';
import InfoBar from '../components/InfoBar';

function Hero() {
  return (
    <div>
      <Image
        src="/images/harold-profile.jpg"
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
    </div>
  );
}

export default Hero;
