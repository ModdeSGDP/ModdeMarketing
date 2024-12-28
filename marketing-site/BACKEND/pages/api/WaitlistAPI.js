import connectMongo from '../../lib/mongodb';
import Waitlist from '../../models/Waitlist';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await connectMongo();
    try {
      const waitlistEntry = await Waitlist.create(req.body);
      res.status(201).json(waitlistEntry);
    } catch (error) {
      res.status(400).json({ error: 'Error saving to the waitlist' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
