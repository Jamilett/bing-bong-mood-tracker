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

export const HAPPY_COUNT = gql`
    query get_happy_count {
        get_happy_count
   }
}`;

export const ANGRY_COUNT = gql`
    query get_angry_count {
        get_angry_count
   }
}`;

export const ANXIOUS_COUNT = gql`
    query get_anxious_count {
        get_anxious_count
   }
}`;

export const SAD_COUNT = gql`
    query get_sad_count {
        get_sad_count
   }
}`;

export const FEAR_COUNT = gql`
    query get_fear_count {
        get_fear_count
   }
}`;