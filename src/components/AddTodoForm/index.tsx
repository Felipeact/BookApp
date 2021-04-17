import React, { useState } from 'react';

import { Container } from './styles';

interface Props {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<Props> = ({ addTodo }) => {

  const [text, setText] = useState('')
  return (
    <Container>
      <form>
      <input
        type="text"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
        <button type='submit' onClick={e => {
          e.preventDefault();
          addTodo(text);
          setText('');
        }}>Add Todo</button>
      </form>
    </Container>
  );
};

export default AddTodoForm;
