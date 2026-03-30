export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'POST' || req.method === 'GET') {
    console.log(`Request received at ${new Date().toISOString()}`);
    res.status(200).json({ message: 'OK' });
  } else {
    res.status(405).end('Method Not Allowed');
  }
}
