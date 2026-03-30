import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'POST') {
    const count = await kv.incr('counter');
    console.log(`Request received. Total: ${count}`);
    res.status(200).json({ count });
  } 
  else if (req.method === 'GET') {
    const count = (await kv.get('counter')) || 0;
    res.status(200).json({ count });
  }
  else {
    res.status(405).end('Method Not Allowed');
  }
}
