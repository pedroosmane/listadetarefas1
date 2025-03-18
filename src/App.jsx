import { useState } from 'react'
import Todo from "./components/Todo";

import "./App.css";
import TodoForm from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Criar funcionalidade X no sistema",
      Category: "trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      Category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "estudar React",
      Category: "estudos",
      isCompleted: false,
    },
  ]);


  return <div className= "app">
    <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo}/>
        ))}
      </div>
      <TodoForm/>
    </div>
    
   
}

export default App
