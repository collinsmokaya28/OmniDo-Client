import React, { useState } from "react";

function NewTodo({ onAddItem }) {
    const [text, setText] = useState("");
    const [category, setCategory] = useState("Any");

    function handleSubmit(e) {
        e.preventDefault();
        const newTodo = {
            text: text,
            category: category,
            done: false,
        };
    }

    return (
        <form className="newItem" onSubmit={handleSubmit}>
            <label>
                <p className="content">Task: <input type="text" name="name" placeholder="Enter task" value={text} onChange={(e) => setText(e.target.value)} /></p>
            </label>

            <label>
                <p className="content">Category: <select name="category" value={category} className="content" onChange={(e) => setCategory(e.target.value)}>
                    <option value="Any">Any</option>
                    <option value="Coding">Coding</option>
                    <option value="Relaxing">Relaxing</option>
                </select>
                </p>
            </label>

            <button className="btn add" type="submit">
                Add
            </button>
        </form>
    );
}

export default NewTodo;
