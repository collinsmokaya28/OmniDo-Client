import React, { useEffect, useState } from "react";
import NewTodo from "./NewTodo";
import Sort from "./Sort";
import Todo from "./Todo";
import './Todo.css';

function TodoList() {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/todos")
            .then((res) => res.json())
            .then((data) => setTodos(data));
    }, []);


    const todosToDisplay = todos.filter((item) => {
        if (selectedCategory === "All") return true;

        return item.category === selectedCategory;
    });

    return (
        <div className="container-fluid">
            <div className="todoList">
                <div className="header">Today's Task</div>
                <NewTodo
                    onAddItem={handleAddTodo}
                />
                <Sort
                    category={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                />
                <ul className="todos">

                    {todosToDisplay.map((todo) => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            onUpdateItem={handleUpdateItem}
                            onItemDelete={handleDeleteItem}
                        />
                    ))}

                </ul>
            </div>
        </div>
    );
}

export default TodoList;
