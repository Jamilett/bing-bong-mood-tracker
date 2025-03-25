import { gql } from 'graphql-tag';
const typeDefs = gql `

    type User {
        _id: ID
        email: String
        feelings: [Feelings_Catalog]
    }

    type Feelings_Catalog {
        _id: ID
        feeling: String
        feeling_name: String
        createdAt: String
        comment: String
        user: User
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

    input AgregaMood {
        feeling_name: String
        comment: String
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
        me_info: User
        get_feeling: [Feelings_Catalog]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(input: UserInput!): Auth
        saveMood(moodData: MoodInput!): User
        salvaMood(moodData: AgregaMood!): Feelings_Catalog
        removeMood(moodId: String!): User
    }

`;
export default typeDefs;
