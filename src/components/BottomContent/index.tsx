
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Container } from './styles';

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

function BottomContent() {
  
  let  {  id }: any = useParams();
  const { data }: any = useFetch<Statement>(`statement/${id}`);

  if (!data) {
    return <p>Carregando...</p>
  }

  const results: Statement = data[0]
  
  return (
    <Container>
      <div className="total">
          <div className="amount">
            <p>Amount</p>
            <p>{results.amount}</p>
          </div>
          <div className="totalRev">
            <p>Tota Rev.</p>
            <p>$ 100000</p>
          </div>
        </div>
        <div className="balance">
          <div className="balanceTotal">
            <p>Balance</p>
            <p>$ 0</p>
          </div>
        </div>
    </Container>
  );
};

export default BottomContent;
