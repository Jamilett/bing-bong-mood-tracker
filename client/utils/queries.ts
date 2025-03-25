import { gql } from '@apollo/client';

export const GET_MOODS = gql`
    query Query {
    get_feeling {
        user {
        email
        }
        feeling_name
        createdAt
        comment
    }
    }
    `;