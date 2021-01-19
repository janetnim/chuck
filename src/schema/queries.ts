export default `
  type Categories {
    categories: [String]
  }

  type Joke {
    id: ID
    created_at: String
    icon_url: String
    updated_at: String
    url: String
    value: String
    categories: [String]
  }

  type Query {
    categories: Categories,
    random(category: String): Joke
  }
`;
