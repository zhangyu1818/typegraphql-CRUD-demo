import { ObjectType, Field, ID } from "type-graphql";

@ObjectType({ description: "The todo-list model" })
class TodolistType {
  @Field(type => ID)
  id: string;
  @Field(type => String)
  content: string;
  @Field(type => Boolean)
  completed: boolean;
}
export default TodolistType;
