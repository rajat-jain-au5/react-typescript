import React, { useState } from 'react'
import { useTodos } from '../store/todos';

const AddTodo = () => {
    const [todo, setTodo] = useState('');

    const { handleAddTodo } = useTodos();

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodo(todo)
        setTodo('');
    }
    return (
        <form onSubmit={handleForm} style={{ marginTop: 20 }}>
            <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type='submit' disabled={!todo}>Add</button>
        </form>
    )
}

export default AddTodo