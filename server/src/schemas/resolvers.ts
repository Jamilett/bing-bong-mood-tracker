import { User, Feelings_Catalog } from "../models/index.js";
import { signToken } from "../utils/index.js";
// Define interfaces for TypeScript type safety
export interface User {
  _id: any;
  email: string;
  password: string;
  savedMoods?: any[];
  isCorrectPassword: (password: string) => Promise<boolean>;
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

export interface Feelings_Catalog {
    feeling?: string;
    feeling_name?: string;
    createdAt: Date;
    comment: string;
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
        return User.findById(context.user._id);
      }
      throw new Error('Not logged in');
    },
  
    me_info: async (_parent: any, _args: unknown, context: AuthContext) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id }).populate('feelings');
        }
    throw new Error('Could not authenticate user.');
    },

    get_feeling: async (_parent: any, _args: unknown) => {

      try {
        const results = await Feelings_Catalog.find({})
        console.log("Found:¨", results)
        return results;
      } catch (error) {
        console.log("Error: ", error)
      }

      return Feelings_Catalog.find({})
    },

  },
  Mutation: {
    addUser: async (_parent: unknown, { input }: { input: UserInput }) => {
      console.log("input: ", input);
      try {
        const user = await User.create(input) as User;
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user account');
      }
    },
    
    login: async (_parent: unknown, { email, password }: { email: string, password: string }) => {
      console.log("Incoming data: ", email, password);
      const user = await User.findOne({ email }) as User;
      
      if (!user) {
        console.log("no user found");
        throw new Error('Incorrect credentials');
      }
      console.log("User found: ", user);
      // This should be replaced with proper password comparison
      // using bcrypt or similar library
      const correctPw = await user.isCorrectPassword(password);
      
      if (!correctPw) {
        console.log("incorrect password: ", correctPw);
        throw new Error('Incorrect credentials');
      }
      
      const token = signToken(user);
      return { token, user };
    },
    
    saveMood: async (_parent: unknown, { moodData }: { moodData: MoodInput }, context: AuthContext) => {
      if (!context.user) {
        throw new Error('You need to be logged in!');
      }
      
      try {
        const updatedUser = await User.findByIdAndUpdate(
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
        throw new Error('You need to be logged in!');
      }
      
      try {
        const updatedUser = await User.findByIdAndUpdate(
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

export default resolvers;