// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    const removeTodo = (index) => {
        const newTodoList = [...todos];
        newTodoList.splice(index, 1);
        setTodos(newTodoList);
    };

    return (
        <div className={"container"}>
            <h2>Todo List</h2>

            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={addTodo}>Přidat úkol</button>
            </div>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => removeTodo(index)}>Odstranit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
