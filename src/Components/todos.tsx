import { useTodos } from '../store/todos';
import { useSearchParams } from 'react-router-dom';

const Todos = () => {
    const { todos, toggleTodoAsCompleted, handleDelete } = useTodos();
    const [searchParams] = useSearchParams();

    let todosData = searchParams.get('todos')
    console.log('ff', todosData)
    let filterData = todos;
    if (todosData === 'active') {
        filterData = filterData.filter((el) => !el.completed)
    }
    if (todosData === 'completed') {
        filterData = filterData.filter((el) => el.completed)
    }

    return (
        <ul className="main-task">
            {filterData?.map((todo) => {
                return (
                    <li key={todo.id}>
                        <input type='checkbox' id={`todo-${todo.id}`} checked={todo.completed} onChange={() => toggleTodoAsCompleted(todo.id)} />
                        <label htmlFor=''>{todo.task}</label>
                        {
                            todo.completed &&
                            <button type='button' onClick={() => handleDelete(todo.id)}>Delete</button>
                        }
                    </li>
                )
            })}
        </ul>
    )
}

export default Todos