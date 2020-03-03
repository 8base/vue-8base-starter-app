/**
 * Query the current users details.
 */
export const CURRENT_USER_QUERY = `
  query {
    user {
      id
      email
    }
  }
`;
/**
 * Random query for example.
 */
export const RANDOM_QUERY = `
  query {
    user {
      firstName
    }
  }
`;
