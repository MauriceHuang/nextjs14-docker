'use client'
import { createTodoAction } from "./actions";
import { SubmitButton } from "./submit-button";

export function CreateTodoForm() {

    return (
        <form onSubmit={e => {
            e.preventDefault()
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            createTodoAction(formData).then(() => {
                form.reset();
            })
        }}>

            <input name="text" className="text-black" />
            <SubmitButton />
        </form>)
}