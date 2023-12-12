import db from "db";
import { todos } from "db/schema";

export default function Home() {
  return (
    <main className="">
      <form action={async (formData: FormData) => {
        "use server"
        const text = formData.get("text") as string;
        await db.insert(todos).values({ text, })
      }}>
        <input name="text" className="text-black" />
        <button>Create Todo</button>
      </form>
    </main>
  )
}
