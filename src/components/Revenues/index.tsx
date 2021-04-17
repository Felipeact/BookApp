import React, { useState } from 'react';
import AddTodoForm from '../AddTodoForm';
import TodoList from '../TodoList';

import { Container } from './styles';

export const initialTodos: Todo[] = []


const Revenues:React.FC = () => {
  
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo){
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    })
    setTodos(newTodos)
  }

  
  const addTodo: AddTodo = (text: string) => {
    const newTodo = {text, complete: false};
    setTodos([...todos, newTodo]);
  };
  
 
  return (
    <Container>
      <div>
      <h1>Revenues</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
      
    </Container>
  );
};

export default Revenues;


