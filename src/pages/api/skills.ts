import { NextApiRequest, NextApiResponse } from 'next';

const mockSkills = [
  { name: 'HTML', level: 8 },
  { name: 'CSS', level: 6 },
  { name: 'React', level: 10 },
  { name: 'Next.js', level: 5 },
  { name: 'TypeScript', level: 7 },
  { name: 'Tailwind', level: 3 },
];

function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ skills: mockSkills });
}

export default handler;
