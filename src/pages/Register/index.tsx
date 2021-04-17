
import { useAuth } from '../../contexts/auth';
import { Container} from './styles';
import { Form } from '@unform/web';
import { useRef } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
import Input from '../../components/Input/Input'
import Header from '../../components/Header';
import Select from '../../components/Select';


interface FormData {
  name: string
  email: string
  password: string,
  role: string,
}

function LogIn() {
  const {  Register } = useAuth();

  const formRef = useRef<FormHandles>(null)
  const handleSubmit: SubmitHandler<FormData> = data => {
    async function handleSub() {
      await Register(data)
    }
    handleSub()
  }

  const selectOptions = [
    { value: 'adm', label: 'adm'},
    {value:'user', label: 'user'}
  ]

  return (
    <Container>
      <Header />
      <div className="wrapper">
        <div className="contentImg">
          <img src="icons/logoEconomy.svg" alt=""/>
        </div>
        <div className="formLog">
          <Form className="form" ref={formRef} onSubmit={handleSubmit}>
            <h1>New User</h1>
            <Input className="InputForm" label="Name" type="text" name="name"/>
            <Input className="InputForm" label="Email" type="email" name="email"/>
            <Input className="InputForm" label="Password" type="password" name="password"/>
            <label htmlFor="Role">Role</label>
            <Select type="select" name="role" options={selectOptions}>
              {selectOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}

            </Select>
            <button type="submit"> Add </button>
            <p></p>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default LogIn;
