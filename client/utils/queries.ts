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

export const QUERY_MOOD_COUNTER_ALL = gql`
query Get_Total_Mood_Counters {
  get_happy_count
  get_angry_count
  get_anxious_count
  get_sad_count
  get_fear_count
}
}`;

export const QUERY_MOOD_COUNTER_WEEK = gql`
query Get_Mood_Weekly {
  get_happy_count_week
  get_angry_count_week
  get_anxious_count_week
  get_sad_count_week
  get_fear_count_week
}
}`;

export const QUERY_MOOD_COUNTER_MONTH = gql`
query Get_Mood_Monthly {
  get_happy_count_month
  get_angry_count_month
  get_anxious_count_month
  get_sad_count_month
  get_fear_count_month
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