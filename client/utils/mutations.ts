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

/*
fetch('/api/users/login', {
    method: 'POST',
    headers: {  
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
})
    */