import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        email
      }
      token
    }
  }`

export const ADD_USER = gql`
mutation ADD_USER($name: String!, $email: String!, $password: String!, $fridgeId: String!) {
  addUser(name: $name, email: $email, password: $password, fridgeId: $fridgeId) {
    user {
      name
      password
      fridgeId
      email
      _id
    }
    token
  }
}`
