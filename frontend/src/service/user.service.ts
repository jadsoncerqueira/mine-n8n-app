import { gql } from "@apollo/client";


export const GET_USERS = gql`
    query Query {
        users {
            name
            picture
        }
    }
`

export const LOGIN_USER = gql`
    query Query($token: String!) {
        token(token: $token) {
            name
            picture
            email
        }
    }
`


export const LOGOUT_USER = gql`
    query Query {
        logout
    }
`