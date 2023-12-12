import db from "db";
import { Todo } from "db/schema";
import { revalidatePath } from "next/cache";
export async function getAllTodos() {
    return await db.query.todos.findMany();

}