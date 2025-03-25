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
}`;

    export const QUERY_LATEST_FEELING = gql`
    query Get_latest_feeling {
    get_latest_feeling {
          feeling_name
          comment
          createdAt
        }
    }
}`;
