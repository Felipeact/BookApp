
import { useAuth } from '../../contexts/auth';
import { Container} from './styles';
import { Form } from '@unform/web';
import { useRef } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
import Input from '../../components/Input/Input'

interface FormData {
  name: string
  email: string
}

function LogIn() {
  const {  Login } = useAuth();


  const formRef = useRef<FormHandles>(null)
  const handleSubmit: SubmitHandler<FormData> = data => {
    async function handleSub() {
      await Login(data)
    }
    handleSub()
  }

  return (
    <Container>
      <header>
        <div>
          <h1>Statement</h1>
          <h1>BookApp</h1>
        </div>
      </header>
      <div className="wrapper">
        <div className="contentImg">
          <img src="icons/logoEconomy.svg" alt=""/>
        </div>
        <div className="formLog">
          <Form className="form" ref={formRef} onSubmit={handleSubmit}>
            <h1>Log in</h1>
            <Input className="InputForm" label="Email" type="email" name="email"/>
            <Input className="InputForm" label="Password" type="password" name="password"/>
            <button type="submit"> Go </button>
            <p></p>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default LogIn;
