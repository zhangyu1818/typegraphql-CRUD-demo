import { buildSchemaSync } from "type-graphql";
import TodolistResolver from "./todolist/todolist.resolver";
const schema = buildSchemaSync({
  resolvers: [TodolistResolver]
});
export default schema;
