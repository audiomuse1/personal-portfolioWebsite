// src/api/ai.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { prompt } = req.body;

  // Here you would call your AI provider (OpenAI, etc.)
  // For now, respond with a dummy response:
  return res.status(200).json({ result: `You said: "${prompt}"` });
}