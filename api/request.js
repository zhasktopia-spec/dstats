export default async function handler(req, res) {
  console.log(`Request received at ${new Date().toISOString()}`);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({ message: 'OK' });
}
