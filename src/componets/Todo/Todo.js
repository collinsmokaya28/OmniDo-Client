import { BsCheckLg, BsFillTrashFill, BsXSquareFill } from "react-icons/bs";
import React from "react";

function Todo({ todo, onItemUpdate, onItemDelete }) {
    function handleDone() {
        fetch(`http://localhost:9292/todos/${todo.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                done: !todo.done,
            }),
        })
            .then((res) => res.json())
            .then((updatedItem) => onItemUpdate(updatedItem));
    }
    return (
        <div>
            <li className={todo.done ? "done" : ""}>
                <span>{todo.text}</span>
                <span className="category">{todo.category}</span>
                <button className="btn check" onClick={handleDone}>

                    {todo.done ? <BsCheckLg /> : <BsXSquareFill />}

                </button>
                <button className="remove btn" onClick={handleDelete}>

                    <BsFillTrashFill />

                </button>
            </li>
        </div>
    );
}

export default Todo;