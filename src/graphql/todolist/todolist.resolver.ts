import { Resolver, Query, Arg, Mutation } from "type-graphql";
import TodolistType from "./todolist.type";

const getRandomID = () =>
  (Math.random() * Date.now()).toString(36).substring(0, 8);

const defaultData = [
  {
    id: getRandomID(),
    content: "javascript",
    completed: false
  },
  {
    id: getRandomID(),
    content: "css",
    completed: true
  },
  {
    id: getRandomID(),
    content: "html",
    completed: false
  }
];

@Resolver()
class TodolistResolver {
  private todolistCollection: TodolistType[] = defaultData;
  @Query(returns => [TodolistType])
  todolist(@Arg("completed", { nullable: true }) completed?: boolean) {
    if (completed !== undefined) {
      return this.todolistCollection.filter(
        item => item.completed === completed
      );
    } else return this.todolistCollection;
  }
  @Query({ nullable: true })
  todo(@Arg("id", { nullable: true }) id: string): TodolistType | null {
    return this.todolistCollection.find(item => item.id === id);
  }
  @Mutation(returns => [TodolistType])
  addTodo(@Arg("content") content: string) {
    const id = getRandomID();
    const completed = false;
    this.todolistCollection.push({ id, content, completed });
    return this.todolistCollection;
  }
  @Mutation(returns => [TodolistType])
  removeTodos(@Arg("ids", type => String) ids: string[]) {
    this.todolistCollection = this.todolistCollection.filter(
      item => !ids.some(id => item.id === id)
    );
    return this.todolistCollection;
  }
}

export default TodolistResolver;
