import { User, Feelings_Catalog } from "../models/index.js";
import { signToken } from "../utils/index.js";
import mongoose from "mongoose";
// Define interfaces for TypeScript type safety
export interface User {
  _id: any;
  email: string;
  password: string;
  feelings?: any[];
  isCorrectPassword: (password: string) => Promise<boolean>;
}
interface MoodInput {
  feeling_name: string;
  comment: string;
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
    user: any;
}

// Type for authentication context
interface AuthContext {
  user?: {
    _id: string;
    email: string;
  };
}

const sevenDaysAgo = new Date();
sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);


const thirtyDaysAgo = new Date();
thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);


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

          const resp = await User.findOne({ _id: context.user._id }).populate({
            path: 'feelings',
            model: 'feelings_catalog',
          })
            .exec();
          console.log("respuesta: " + resp);

          return await User.findOne({ _id: context.user._id }).populate({
            path: 'feelings',
            model: 'feelings_catalog',
          })
            .exec();
        }
    throw new Error('Could not authenticate user.');
    },

    get_feeling: async (_parent: any, _args: unknown, context: AuthContext) => {
      if (context.user) {
        return Feelings_Catalog.find({ user: context.user._id }).populate({
          path: 'user',
          model: 'user',
        })
          .exec();
      }
      throw new Error('Could not authenticate user.');
    },

    get_feeling_happy: async (_parent: any, _args: unknown, context: AuthContext) => {
      if (context.user) {
        return Feelings_Catalog.find({ user: context.user._id, feeling_name: "Happy"}).populate({
          path: 'user',
          model: 'user',
        })
          .exec();
      }
      throw new Error('Could not authenticate user.');
    },
    ////////////
    //GET UNIVERSAL COUNTERS
    ////////////
    get_happy_count: async (_parent: any, _args: unknown, context: AuthContext) => {
      if (context.user) {
        return Feelings_Catalog.countDocuments({ user: context.user._id, feeling_name: "Happy" })
          .exec();
      }
      throw new Error('Could not authenticate user.');
    },

    get_angry_count: async (_parent: any, _args: unknown, context: AuthContext) => {
      if (context.user) {
        return Feelings_Catalog.countDocuments({ user: context.user._id, feeling_name: "Angry" })
          .exec();
      }
      throw new Error('Could not authenticate user.');
    },

    get_anxious_count: async (_parent: any, _args: unknown, context: AuthContext) => {
      if (context.user) {
        return Feelings_Catalog.countDocuments({ user: context.user._id, feeling_name: "Anxious" })
          .exec();
      }
      throw new Error('Could not authenticate user.');
    },

    get_sad_count: async (_parent: any, _args: unknown, context: AuthContext) => {
      if (context.user) {
        return Feelings_Catalog.countDocuments({ user: context.user._id, feeling_name: "Sad" })
          .exec();
      }
      throw new Error('Could not authenticate user.');
    },

    get_fear_count: async (_parent: any, _args: unknown, context: AuthContext) => {
      if (context.user) {
        return Feelings_Catalog.countDocuments({ user: context.user._id, feeling_name: "Fear" })
          .exec();
      }
      throw new Error('Could not authenticate user.');
    },

    ///////////
    ///////////
    ///////////

    //////////
    // GET LAST WEEK COUNTERS
    /////////
    get_happy_count_week: async (_parent: any, _args: unknown, context: AuthContext) => {
      if (context.user) {
        return Feelings_Catalog.countDocuments({ user: context.user._id, feeling_name: "Happy", createdAt: { $gte: sevenDaysAgo } }).exec();
      } throw new Error('Could not authenticate user.');
    },

    get_angry_count_week: async (_parent: any, _args: unknown, context: AuthContext) => {
      if (context.user) {
        return Feelings_Catalog.countDocuments({ user: context.user._id, feeling_name: "Angry", createdAt: { $gte: sevenDaysAgo } }).exec();
      } throw new Error('Could not authenticate user.');
    },

    get_anxious_count_week: async (_parent: any, _args: unknown, context: AuthContext) => {
      if (context.user) {
        return Feelings_Catalog.countDocuments({ user: context.user._id, feeling_name: "Anxious", createdAt: { $gte: sevenDaysAgo } }).exec();
      } throw new Error('Could not authenticate user.');
    },

    get_sad_count_week: async (_parent: any, _args: unknown, context: AuthContext) => {
      if (context.user) {
        return Feelings_Catalog.countDocuments({ user: context.user._id, feeling_name: "Sad", createdAt: { $gte: sevenDaysAgo } }).exec();
      }  throw new Error('Could not authenticate user.');
    },

    get_fear_count_week: async (_parent: any, _args: unknown, context: AuthContext) => {
      if (context.user) {
        return Feelings_Catalog.countDocuments({ user: context.user._id, feeling_name: "Fear", createdAt: { $gte: sevenDaysAgo } }).exec();
      } throw new Error('Could not authenticate user.');
    },

    ///////////
    ///////////
    ///////////


    //////////
    // GET LAST MONTH COUNTERS
    /////////
    get_happy_count_month: async (_parent: any, _args: unknown, context: AuthContext) => {
      if (context.user) {
        return Feelings_Catalog.countDocuments({ user: context.user._id, feeling_name: "Happy", createdAt: { $gte: thirtyDaysAgo } }).exec();
      } throw new Error('Could not authenticate user.');
    },

    get_angry_count_month: async (_parent: any, _args: unknown, context: AuthContext) => {
      if (context.user) {
        return Feelings_Catalog.countDocuments({ user: context.user._id, feeling_name: "Angry", createdAt: { $gte: thirtyDaysAgo } }).exec();
      } throw new Error('Could not authenticate user.');
    },

    get_anxious_count_month: async (_parent: any, _args: unknown, context: AuthContext) => {
      if (context.user) {
        return Feelings_Catalog.countDocuments({ user: context.user._id, feeling_name: "Anxious", createdAt: { $gte: thirtyDaysAgo } }).exec();
      } throw new Error('Could not authenticate user.');
    },

    get_sad_count_month: async (_parent: any, _args: unknown, context: AuthContext) => {
      if (context.user) {
        return Feelings_Catalog.countDocuments({ user: context.user._id, feeling_name: "Sad", createdAt: { $gte: thirtyDaysAgo } }).exec();
      } throw new Error('Could not authenticate user.');
    },

    get_fear_count_month: async (_parent: any, _args: unknown, context: AuthContext) => {
      if (context.user) {
        return Feelings_Catalog.countDocuments({ user: context.user._id, feeling_name: "Fear", createdAt: { $gte: thirtyDaysAgo } }).exec();
      } throw new Error('Could not authenticate user.');
    },

    ///////////
    ///////////
    ///////////


    get_latest_feeling: async (_parent: any, _args: unknown, context: AuthContext) => {
      if (context.user) {
        return Feelings_Catalog.findOne({ user: context.user._id }).sort({ createdAt: -1 }).populate({
          path: 'user',
          model: 'user',
        })
          .exec();
      }
      throw new Error('Could not authenticate user.');
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
  
    salvaMood: async (_parent: unknown, { moodData }: { moodData: MoodInput }, context: AuthContext) => {
      if (!context.user) {
        throw new Error('You need to be logged in!');
      }

      try {
        const addFeeling = await Feelings_Catalog.create({ ...moodData, user: new mongoose.Types.ObjectId(context.user._id) }) as Feelings_Catalog;
        return addFeeling;
        
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