# GraphQL Prettier [![Codacy Badge](https://api.codacy.com/project/badge/Grade/2893bfd204af465eb24e27e01efd6be1)](https://www.codacy.com/app/Emetrop/graphql-prettier) [![Codacy Badge](https://api.codacy.com/project/badge/Coverage/2893bfd204af465eb24e27e01efd6be1)](https://www.codacy.com/app/Emetrop/graphql-prettier) [![Build Status](https://travis-ci.org/Emetrop/graphql-prettier.svg?branch=master)](https://travis-ci.org/Emetrop/graphql-prettier)

Prettify & simplify GraphQL query/mutation/subscription.

## Description

Package exports a default function which accepts two parameters:

```
prettify(source: string, noDuplicates = true): string
```

`source` is a string with GraphQL query/mutation/subscription to prettify

`noDuplicates` is a boolean value which set up to false turns out function to leaving duplicated fields

## Install

```sh
npm install graphql-prettier
```

## Usage

```js
import gqlPrettier from 'graphql-prettier';

const query = `
query ViewerQuery {
  viewer {
    user {
      id
      name
      ...userFragment
    }
  }
}
fragment userFragment on User {
  id
  name
  email
}
`;

const prettifiedQuery = gqlPrettier(query); // returns string
```

## Example

```
query ViewerQuery {
  viewer {
    user {
      id
      name
      id
      ...userFragment
      name
    }
  }
}
fragment userFragment on User {
  id
  name
  email
  name
}
```

Is transformed to:

```
query ViewerQuery {
  viewer {
    user {
      id
      name
      email
    }
  }
}
```

### License

GraphQL Prettier is [MIT-licensed](https://github.com/Emetrop/graphql-prettier/blob/master/LICENSE).
