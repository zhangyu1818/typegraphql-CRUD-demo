import "reflect-metadata";
import * as Koa from "koa";
import { ApolloServer } from "apollo-server-koa";

import schema from "./src/graphql/schema";

const server = new ApolloServer({
  schema
});

const app = new Koa();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
