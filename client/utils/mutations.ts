import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                email
            }
        }
    }
`;

export const GET_QUOTE = gql`
  query {
    getQuote {
      text
      author
    }
  }
`;

export const ADD_USER = gql`
    mutation addUser($input: UserInput!) {
        addUser(input: $input) {
            token
            user {
                _id
                email
            }
        }
    }
`;

export const ADD_MOOD = gql`
    mutation Mutation($moodData: AgregaMood!) {
        salvaMood(moodData: $moodData) {
            feeling_name
            comment
        user {
                _id
            }
        }
    }
`;