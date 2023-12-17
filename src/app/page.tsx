import { unstable_cache, unstable_noStore } from "next/cache";
import { createTodoAction, deleteTodoAction } from "./actions";
import { getAllTodos } from "data-access/todos";
import { SubmitButton } from "./submit-button";

export default async function Home() {
  unstable_noStore();
  const todos = await getAllTodos();
  return (
    <main className="">
      <ul>
        {todos.map(todo => (
          <li className="flex gap-2 item-center" key={todo.id}>{todo.text}
            <form action={deleteTodoAction.bind(null, todo.id)}>
              <button className="text-red-400">Delete</button>
            </form>
          </li>))}
      </ul>
      <form action={createTodoAction}>
        <input name="text" className="text-black" />
        <SubmitButton />
      </form>
    </main>
  )
}
