
import { Container} from './styles';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import Input from '../../components/Input/Input'
import Select from '../../components/Select';
import { useAuth } from '../../contexts/auth';
import { useRef } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import api from '../../services/api';


interface FormData {
  name: string
  email: string
  password: string,
  role: string,
  id: string,
}

export const Getuser = JSON.parse(sessionStorage.getItem('@App:user') || '{}')

function ProfileInfo() {

  //Updating User
  const {  Update } = useAuth();
  
  const formRef = useRef<FormHandles>(null)
  const handleSubmit: SubmitHandler<FormData> = data => {
    async function handleSub() {
      await Update(data)
    }
    handleSub()
  }

  //Showing user
  const { data } = useFetch<FormData>(`user/${Getuser.id}`);
  if (!data) {
    return <p>Loading...</p>
  }

  //Delete User
  async function DeleteOnclick() {
    const response = await api.delete('users');

    if(!response.data){
      return <p>Loading...</p>
    }

    sessionStorage.removeItem('@App:token')
    window.location.reload()
  }


  const selectOptions = [
    { value: 'adm', label: 'adm'},
    {value:'user', label: 'user'},
  ]

  const initialData = {
    name: data?.name,
    email: data?.email,
    password: data?.password,
    role: data?.role,
  }

  return (
    <Container>
      <div className="profileInfo">
        <div className="infoLeft">
          <Link to="#">Edit</Link>
          {/* Image  */}
          <img src="icons/SemImage.jpg" alt=""/>
          <div className="buttons">
            <button type="submit" form="SaveButton">Save</button>
            <button onClick={DeleteOnclick}>Delete</button>
          </div>
        </div>
        <div className="infoRight">
        <Form className="form" ref={formRef} onSubmit={handleSubmit} id="SaveButton" initialData={initialData}>
            <h1>New User</h1>
            <Input className="InputForm" label="Name" type="text" name="name" />
            <Input className="InputForm" label="Email" type="email" name="email"/>
            <Input className="InputForm" label="Password" type="password" name="password"/>
            <label htmlFor="Role">Role</label>
            <Select type="select" name="role" options={selectOptions} >
              {selectOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}

            </Select>
  
            <p></p>
          </Form>
        </div>
      </div>
      
    </Container>
  );
};

export default ProfileInfo;
