import gql from "graphql-tag";
/**
 * Query the current users details.
 */
export const CURRENT_USER_QUERY = gql`
  query {
    user {
      id
      email
    }
  }
`;
/**
 * Sign up a new user mutation.
 */
export const USER_SIGN_UP_MUTATION = gql`
  mutation UserSignUp($user: UserCreateInput!, $authProfileId: ID) {
    userSignUpWithToken(user: $user, authProfileId: $authProfileId) {
      id
      email
    }
  }
`;
/**
 * Query users boards from the API.
 */
export const GET_BOARDS_QUERY = gql`
  query getBoard {
    boardsList {
      items {
        id
        name
        todos(sort: { status: DESC }) {
          items {
            id
            description
            status
          }
        }
      }
    }
  }
`;
/**
 * Create a new board mutation.
 */
export const CREATE_BOARD_MUTATION = gql`
  mutation createBoard($name: String!) {
    boardCreate(data: { 
      name: $name 
    }) {
      id
      name
    }
  }
`;
/**
 * Update a board mutation.
 */
export const UPDATE_BOARD_MUTATION = gql`
  mutation changeBoardName($boardId: ID!, $name: String!) {
    boardUpdate( 
    data: {
      id: $boardId
      name: $name 
    }) {
      id
    }
  }
`;
/**
 * Delete a board mutation.
 */
export const DELETE_BOARD_MUTATION = gql`
  mutation deleteBoard($boardId: ID!) {
    boardDelete(data: { 
      id: $boardId 
    }) {
      success
    }
  }
`;
/**
 * Watch board create, update, and delete subscription.
 */
export const BOARDS_SUBSCRIPTION = gql`
  subscription {
    Board(filter: { mutation_in: [create, update, delete] }) {
      updatedFields
      node {
        id
      }
    }
  }
`;
/**
 * Create a todo mutation.
 */
export const CREATE_TODO_MUTATION = gql`
  mutation createTodo($description: String!, $boardId: ID!) {
    todoCreate(data: { 
      description: $description, 
      board: { 
        connect: { 
          id: $boardId 
        } 
      } 
    }) {
      id
      description
      status
    }
  }
`;
/**
 * Update todo description mutation.
 */
export const CHANGE_TODO_DESCRIPTION_MUTATION = gql`
  mutation changeTodoDescription($todoId: ID!, $description: String!) {
    todoUpdate(data: { 
      id: $todoId
      description: $description 
    }) {
      id
      description
      status
    }
  }
`;
/**
 * Update todo status mutation.
 */
export const CHANGE_TODO_STATUS_MUTATION = gql`
  mutation changeTodoStatus($todoId: ID!, $status: String!) {
    todoUpdate(data: {
      id: $todoId
      status: $status 
    }) {
      id
      description
      status
    }
  }
`;
/**
 * Delete a todo mutation.
 * @type {[type]}
 */
export const DELETE_TODO_MUTATION = gql`
  mutation deleteTodo($todoId: ID!) {
    todoDelete(data: { 
      id: $todoId 
    }) {
      success
    }
  }
`;
/**
 * Watch todo creates, updates, and deletes subscription.
 */
export const TODOS_SUBSCRIPTION = gql`
  subscription {
    Todos(filter: { 
      mutation_in: [create, update, delete] 
    }) {
      updatedFields
      node {
        id
      }
    }
  }
`;