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

        </form>
    );
}

export default NewTodo;
