import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import { useFetch } from '../../components/hooks/useFetch';
import BottomContent from '../../components/BottomContent';
import MainContent from '../../components/MainContent';

import { Container, Table, Left, Right  } from './styles';

interface Statement {
      id: number,
      month: string,
			costco: number,
      visa: number,
      tellus: number,
      msp: number,
      icbc: number,
      rent: number,
      mfee: number,
      others: number,
      bcHydro: number,
      dayCare: number,
      amount: number,
      totalrev: number,
      balance:number,
      previousbalance: number
}


function Calendary() {

  let history = useHistory();

  const { data } = useFetch<Statement[]>('statements');

  if (!data) {
    return <p>Carregando...</p>
  }

  const lastMonth = (data[data.length - 1].month)

  
   async function handleChangeSite(value: string){
     history.push(`/calendary/${value}`)
    }


  return (
  
    <Container>
      <Header />
    
      <Table>
        <Left>
          <header>
            <select onChange={ event => handleChangeSite(event.target.value)}>
              <option>{lastMonth}</option>
              {data.map(statement => (
              <option value={statement.id} key={statement.id}>{statement.month}</option>
              ))}
            </select>
            
            <div className="previousBalance">
              <p>Left Over</p>
              <p className="cash">$ </p>
            </div>
          </header>
          <div className="line"></div>
          
         <MainContent />

        </Left>

        <Right>

          <div>
            <h1>Revenues</h1>
            <p> $ 200000</p>
            <p> $ 200000</p>
            <p> $ 200000</p>

          </div>


        </Right>
      </Table>

    
      <BottomContent />
  

    </Container>
  );
};

export default Calendary;
