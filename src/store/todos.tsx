import { ReactNode, createContext, useContext, useState } from "react";

export type TodosProviderProps = {
    children: ReactNode
}

export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}

export type TodosContext = {
    todos: Todo[];
    handleAddTodo: (task: string) => void
    toggleTodoAsCompleted: (id: string) => void
    handleDelete: (id: string) => void

}

export const TodosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAddTodo = (task: string) => {
        setTodos((prev) => {
            const newTodos: Todo[] = [{
                id: Math.random().toString(),
                task: task,
                completed: false,
                createdAt: new Date()
            }, ...prev]
            console.log(prev, newTodos)
            return newTodos
        })
    }

    const toggleTodoAsCompleted = (id: string) => {
        setTodos((prev) => {
            let newTodos = prev.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo
            })
            return newTodos
        })
    }

    const handleDelete = (id: string) => {
        setTodos((prev) => {
            let newTodos = prev.filter(el => el.id !== id)
            return newTodos
        })
    }
    return (<TodosContext.Provider value={{ todos, handleAddTodo, toggleTodoAsCompleted, handleDelete }}>
        {children}
    </TodosContext.Provider>)

}

//consumer

export const useTodos = () => {
    const todoConsumer = useContext(TodosContext)
    if (!TodosContext) {
        throw new Error('usetodos used outsode of provider')
    }
    return todoConsumer
}