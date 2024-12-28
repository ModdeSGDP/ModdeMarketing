import connectMongo from '../../lib/mongodb';
import Retailer from '../../models/Retailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await connectMongo();
    try {
      const retailerEntry = await Retailer.create(req.body);
      res.status(201).json(retailerEntry);
    } catch (error) {
      res.status(400).json({ error: 'Error saving retailer data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
