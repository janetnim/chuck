import types from "./types";

export default `
  type Query {
    categories: [Categories!]!,
    random(category: String): Random
  }

  type Categories {
    name: String!
  }

  type Random {
    value: String!
  }
`;
