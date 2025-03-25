import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import resolvers from './resolvers';
import typeDefs from './typeDefs';
import { quoteTypeDefs, quoteResolvers } from "./quoteSchema";

export const mergedTypeDefs = mergeTypeDefs([typeDefs, quoteTypeDefs]);
export const mergedResolvers = mergeResolvers([resolvers, quoteResolvers]);

export { default as User } from '../models/User';