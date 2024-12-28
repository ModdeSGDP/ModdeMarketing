import mongoose from 'mongoose';

const WaitlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  interestLevel: { type: String, required: true },
  message: { type: String },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.models.Waitlist || mongoose.model('Waitlist', WaitlistSchema);
