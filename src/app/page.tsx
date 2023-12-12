import createTodoAction from "./actions";
import db from "db";
import { todos } from "db/schema";

export default async function Home() {
  const todos = await db.query.todos.findMany();
  return (
    <main className="">
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
      </ul>
      <form action={createTodoAction}>
        <input name="text" className="text-black" />
        <button>Create Todo</button>
      </form>
    </main>
  )
}
