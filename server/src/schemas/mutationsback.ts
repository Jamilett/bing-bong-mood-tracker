import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js'; // Adjust import path as needed

// Define TypeScript interfaces
interface MoodInput {
  thoughtText: string;
  title: string;
  description: string;
}

interface UserInput {
  username: string;
  email: string;
  password: string;
}

interface Context {
  user?: {
    _id: string;
    email: string;
  };
}

// JWT configuration
const SECRET_KEY = 'your_secret_key_here'; // Replace with secure key in production
const TOKEN_EXPIRATION = '2h';

const mutations = {
  // Login mutation
  login: async (_: any, { email, password }: { email: string; password: string }) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error('Incorrect password');
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, 
      SECRET_KEY, { expiresIn: TOKEN_EXPIRATION });
    
    return {
      token,
      user,
    };
  },

  // Register new user mutation
  // Method name | (parent, args, context, info)
  addUser: async (_: any, { input }: { input: UserInput }) => {
    const { username, email, password } = input;
    
    // Check if user already exists by email only
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      throw new Error('User with this email already exists');
    }
    
    // Hash password --> Because we are doing in through the MODEL
  //  const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      username,
      email,
      password
    });
    console.log("New User:¨", user);
    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email }, 
      SECRET_KEY, 
      { expiresIn: TOKEN_EXPIRATION }
    );
    
    return {
      token,
      user,
    };
  },

  // Save mood mutation
  saveMood: async (_: any, { moodData }: { moodData: MoodInput }, context: Context) => {
    if (!context.user) {
      throw new Error('You must be logged in to perform this action');
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        context.user._id,
        { 
          $push: { 
            savedMoods: {
              ...moodData,
              createdAt: new Date().toISOString(),
              email: context.user.email
            } 
          } 
        },
        { new: true }
      );

      return updatedUser;
    } catch (err) {
      console.error('Error saving mood:', err);
      throw new Error('Failed to save mood');
    }
  },

  // Remove mood mutation
  removeMood: async (_: any, { moodId }: { moodId: string }, context: Context) => {
    if (!context.user) {
      throw new Error('You must be logged in to perform this action');
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        context.user._id,
        { $pull: { savedMoods: { _id: moodId } } },
        { new: true }
      );

      if (!updatedUser) {
        throw new Error('User not found');
      }

      return updatedUser;
    } catch (err) {
      console.error('Error removing mood:', err);
      throw new Error('Failed to remove mood');
    }
  },
};

export default mutations;