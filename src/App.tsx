import AddToDo from './Components/addTodo';
import Todos from './Components/todos';
import Navbar from './Components/navbar';
import './App.css';

const App = () => {
  return (
    <main>
      <h1>TODO REACT + TYPESCRIPT</h1>
      <Navbar />
      <AddToDo />
      <Todos />
    </main>
  )
}

export default App