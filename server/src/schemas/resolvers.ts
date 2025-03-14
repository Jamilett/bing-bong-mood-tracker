import models from "../models/index.js";
import { AuthenticationError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';

// Define interfaces for TypeScript type safety
export interface User {
  _id: any;
  email: string;
  password: string;
  savedMoods?: any[];
}

interface MoodInput {
  thoughtText: string;
  title: string;
  description: string;
}

interface UserInput {
  email: string;
  password: string;
}

// Type for authentication context
interface AuthContext {
  user?: {
    _id: string;
    email: string;
  };
}

const resolvers = {
  Query: {
    me: async (_parent: unknown, _args: unknown, context: AuthContext) => {
      if (context.user) {
        return models.User.findById(context.user._id);
      }
      throw new AuthenticationError('Not logged in');
    }
  },
  
  Mutation: {
    addUser: async (_parent: unknown, { input }: { input: UserInput }) => {
      try {
        const user = await models.User.create(input) as User;
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user account');
      }
    },
    
    login: async (_parent: unknown, { email, password }: { email: string, password: string }) => {
      const user = await models.User.findOne({ email }) as User;
      
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      
      // This should be replaced with proper password comparison
      // using bcrypt or similar library
      const correctPw = await models.User.isCorrectPassword(password);
      
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      
      const token = signToken(user);
      return { token, user };
    },
    
    saveMood: async (_parent: unknown, { moodData }: { moodData: MoodInput }, context: AuthContext) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }
      
      try {
        const updatedUser = await models.User.findByIdAndUpdate(
          context.user._id,
          { 
            $push: { 
              savedMoods: {
                ...moodData,
                username: context.user.email,
                createdAt: new Date().toISOString()
              } 
            } 
          },
          { new: true, runValidators: true }
        );
        
        return updatedUser;
      } catch (error) {
        console.error('Error saving mood:', error);
        throw new Error('Failed to save mood');
      }
    },
    
    removeMood: async (_parent: unknown, { moodId }: { moodId: string }, context: AuthContext) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }
      
      try {
        const updatedUser = await models.User.findByIdAndUpdate(
          context.user._id,
          { $pull: { savedMoods: { _id: moodId } } },
          { new: true }
        );
        
        return updatedUser;
      } catch (error) {
        console.error('Error removing mood:', error);
        throw new Error('Failed to remove mood');
      }
    }
  }
};

// JWT configuration
const secret = 'secret_key'; // Replace with your actual secret key
const expiration = '2h';

function signToken(user: User) {
  const payload = {
    _id: user._id,
    username: user.email,
    email: user.email
  };
  
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}

export default resolvers;