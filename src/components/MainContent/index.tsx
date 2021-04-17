
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Container, Main } from './styles';

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

function MainContent() {
  
  let  {  id }: any = useParams();
  const { data }: any = useFetch<Statement>(`statement/${id}`);

  if (!data) {
    return <p>Carregando...</p>
  }

  const results: Statement = data[0]

//   const array = [ results.amount, results.balance, results.bcHydro, results.costco, results.dayCare, results.icbc, results.icbc, results.mfee, results.msp]

//  function sum( obj: any ) {
//    var sum = 0;
//    for ( var i in obj){
//      if (obj.hasOwnProperty( i )){
//       sum += parseFloat( obj[i])
//      }
//    }

//    return sum
//  }

//  var summed = sum( array );
// console.log( "sum: "+summed );
  
  return (
    <Container>
      <Main>
            <div className="leftColumn">

              
                <div className="content">
                  <p>Costco</p>
                  <p>{results.costco}</p>
                </div>
                <div className="content">
                  <p>Visa</p>
                  <p>{results.visa}</p>
                </div>
                <div className="content">
                  <p>Tellus</p>
                  <p>{results.tellus}</p>
                </div>
                <div className="content">
                  <p>MSP</p>
                  <p>{results.msp}</p>
                </div>
                <div className="content">
                  <p>ICBC</p>
                  <p>{results.icbc}</p>
                </div>



            </div>
            <div className="rightColumn">
        
                <div className="content">
                  <p>Rent</p>
                  <p>{results.rent}</p>
                </div>
                <div className="content">
                  <p>M.fee</p>
                  <p>{results.mfee}</p>
                </div>
                <div className="content">
                  <p>Others</p>
                  <p>{results.others}</p>
                </div>
                <div className="content">
                  <p>BC Hydro</p>
                  <p>{results.bcHydro}</p>
                </div>
                <div className="content">
                  <p>Day Care</p>
                  <p>{results.dayCare}</p>
                </div>

            </div>
          </Main>
    </Container>
  );
};

export default MainContent;
