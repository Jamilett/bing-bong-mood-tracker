import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';


mongoose.connect(MONGODB_URI);

export default mongoose.connection;

