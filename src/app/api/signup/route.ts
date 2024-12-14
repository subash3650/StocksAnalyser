import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import User from '../../../models/User';

const MONGODB_URI = process.env.MONGO_URI!;

export async function connectToDatabase() {
    if (mongoose.connection.readyState === 1) {
        return;
    }
    await mongoose.connect(MONGODB_URI);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password, email } = req.body;

        if (!username || !password || !email) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        try {
            await connectToDatabase();

            const newUser  = new User({ username, password, email });
            await newUser .save();

            res.status(201).json({ message: 'User  created successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error creating user', error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}