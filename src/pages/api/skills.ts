import { NextApiRequest, NextApiResponse } from 'next';
import skills from '../../../data/skills.json';

function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ skills });
}

export default handler;
