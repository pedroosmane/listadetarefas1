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

  const addTodo = (text, Category) => {

    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      Category,
      isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };


  return <div className= "app">
    <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
    
   
}

export default App
