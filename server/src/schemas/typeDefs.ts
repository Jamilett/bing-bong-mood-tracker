import { gql } from 'graphql-tag';
const typeDefs = gql `

    type User {
        _id: ID
        email: String
    }

    input UserInput {
        username: String
        email: String
        password: String
    }

    input MoodInput {
        thoughtText: String
        title: String
        description: String
    }

    type Mood {
        description: String
        title: String
        thoughtText: String
        createdAt: String
        email: String
    }
        
    type Auth {
        token: ID!
        user: User
    }
        
    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(input: UserInput!): Auth
        saveMood(moodData: MoodInput!): User
        removeMood(moodId: String!): User
    }

`;
export default typeDefs;
