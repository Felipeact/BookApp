
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { useRef } from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input/Input';
import { useAuth } from '../../contexts/auth';
import { Container, Table, Left, Main, Bottom } from './styles';

const now = new Date()
const months = ["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"]
const monthYear = (months[now.getMonth()] + "/" + now.getFullYear())

const initialData = {
  month: monthYear,
  costco: 0,
  visa: 0,
  tellus: 0,
  msp: 0,
  icbc: 0,
  rent: 0,
  mfee: 0,
  others: 0,
  bcHydro: 0,
  dayCare: 0,
  amount: 0,
  totalrev: 0,
  balance: 0,
  previousbalance: 0,
}

function Expenses() {
  const {  CreateStatement } = useAuth();

  const formRef = useRef<FormHandles>(null)
  const handleSubmit: SubmitHandler<FormData> = data => {
    async function handleSub() {
      await CreateStatement(data)
    }
    handleSub()
  }


  
  

  return (
    <Container>
      <Header />

<Table>
  <Left>
    <header>
      <h1>Expenses</h1> 
      
    </header>
    <div className="line"></div>
    <Main>
          <Form className="form" ref={formRef} onSubmit={handleSubmit} id="SaveButton" initialData={initialData}>
    <div className="leftColumn">
              <Input className="InputForm" type="hidden" name="month"/>
            <div className="flex">
              <Input className="InputForm" label="Costco" type="number" name="costco"/>
            </div>
            <div className="flex">
              <Input className="InputForm" label="Visa" type="number" name="visa"/>
            </div>
            <div className="flex">
             <Input className="InputForm" label="Tellus" type="number" name="tellus"/>
            </div>
            <div className="flex">
              <Input className="InputForm" label="MSP" type="number" name="msp"/>
            </div>
            <div className="flex">
              <Input className="InputForm" label="ICBC" type="number" name="icbc"/>
            </div>
      
    </div>
    <div className="rightColumn">
            <Input className="InputForm" type="hidden" name="amount"/>
            <div className="flex">
              <Input className="InputForm" label="Rent" type="number" name="rent" />
            </div>
            <div className="flex">
              <Input className="InputForm" label="M.fee" type="number" name="mfee"/>
            </div>
            <div className="flex">
              <Input className="InputForm" label="Others" type="number" name="others"/>
            </div>
            <div className="flex">
              <Input className="InputForm" label="BC Hydro" type="number" name="bcHydro"/>
            </div>
            <div className="flex">
            <Input className="InputForm" label="Day Care" type="number" name="dayCare"/>
            </div>
            <Input className="InputForm" type="hidden" name="amount"/>
            <Input className="InputForm" type="hidden" name="totalrev"/>
            <Input className="InputForm" type="hidden" name="balance"/>
            <Input className="InputForm" type="hidden" name="previousbalance"/>

    </div>
          </Form>
  </Main>
  
  </Left>

</Table>

<Bottom>
  <div className="add">
      <button>Add</button>
  </div>
  <div className="save">
      <button type="submit" form="SaveButton">Save</button>
  </div>
  
</Bottom>
     
    </Container>
  );
};

export default Expenses;
