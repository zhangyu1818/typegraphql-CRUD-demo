simple CRUD demo for typegraphql

query
```graphql
{
  all:todolist{
    id
    content
    completed
  }
  filter:todolist(completed:false){
    id
    content
    completed
  }
}
```
mutation
```graphql
mutation{
  addTodo(content:"react"){
    id
    content
    completed
  }
  removeTodos(ids:[""]){
    id
    content
    completed
  }
}
```
