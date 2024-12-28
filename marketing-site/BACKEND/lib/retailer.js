import mongoose from 'mongoose';

const RetailerSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  email: { type: String, required: true },
  businessType: { type: String, required: true },
  location: { type: String },
  message: { type: String },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.models.Retailer || mongoose.model('Retailer', RetailerSchema);
