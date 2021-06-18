// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Version {
  builtOn: string;
  version: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Version>
) {
  res.status(200).json({ builtOn: process.env.BUILT_ON || '', version: process.env.VERSION || 'dev' });
}
