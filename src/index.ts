import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import schema from "./schema";
import resolvers from "./resolvers";
import cors from "cors";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});
const port = process.env.PORT || 4000;
const path = '/graphql';
const app = express();
app.use(cors());
server.applyMiddleware({ app });

/* tslint:disable no-console */
app.listen(port, (): void =>
  console.log(
    `Server running at http://localhost:${port}${path}`,
  ),
);
