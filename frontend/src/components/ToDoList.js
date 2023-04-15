import React, {useEffect, useState} from "react";

function Task({task,handleDelete}) {
    console.log(task)

    return (
        <div>
            <input type="checkbox" id={task.id}/>
            <label htmlFor={task.id}>{task.title}</label>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
        </div>
    );
}

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    function handleDelete(id) {
        fetch(`http://localhost:9000/api/tasks/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                // Filter out the deleted task from the current todos state
                const updatedTodos = todos.filter((todo) => todo._id !== id);
                setTodos(updatedTodos);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        fetch("http://localhost:9000/api/tasks")
            .then((res) => res.json())
            .then((data) => setTodos(data));
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        const todo = {title: newTodo};

        fetch("http://localhost:9000/api/tasks", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(todo),
        })
            .then((res) => res.json())
            .then((data) => setTodos([...todos, data]));
        const Task = ({task, handleDelete}) => {
            return (
                <div>
                    <input type="checkbox" id={task.id}/>
                    <label htmlFor={task.id}>{task.title}</label>
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                </div>
            );
        };
        setNewTodo("");
    }

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) => (
                    <div key={todo.id}>
                        <Task task={todo} handleDelete={handleDelete}/>
                    </div>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <label htmlFor="new-todo">New Todo:</label>
                <input
                    type="text"
                    id="new-todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

export default TodoList;
