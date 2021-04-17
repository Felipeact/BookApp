


import Header from '../../components/Header';
import { useFetch } from '../../components/hooks/useFetch';
import Revenues from '../../components/Revenues';
import { useAuth } from '../../contexts/auth';
import { Container, Table, Left, Main, Right, Bottom } from './styles';



function HomePage() {
  const {  UpdateStatement } = useAuth();
  // const totalAmount = (Cash.map((prod) => prod.dolar).reduce((total, dolar) => total + dolar));
  // const totalR = (CashRight.map((prod) => prod.dolar).reduce((total, dolar) => total + dolar));
  // const TotalBoth = (total + totalR) 


  const { data } = useFetch('statements');

  if (!data) {
    return <p>Carregando...</p>
  }

  const lastId = (data[data.length - 1])

  const results = data[0]
    const array = [ results.amount, results.balance, results.bcHydro, results.costco, results.dayCare, results.icbc, results.icbc, results.mfee, results.msp]

 function sum( obj: any ) {
   var sum = 0;
   for ( var i in obj){
     if (obj.hasOwnProperty( i )){
      sum += parseFloat( obj[i])
     }
   }

   return sum
 }
 
 function sumOnclick() {
   var summed = sum( array );
  
    async function handleSub() {
      const amountUpdate = ({amount: summed})
      await UpdateStatement(amountUpdate)
    }
    window.location.reload()
    handleSub()
  }
   
 


  return (
    <Container>
      <Header />

      <Table>
        <Left>
          <header>
            <h1>Home</h1>
            <div className="previousBalance">
              <p>Left Over</p>
              <p className="cash">$ </p>
            </div>
          </header>
          <div className="line"></div>
          <Main>
            <div className="leftColumn">



              <div className="content">
                <p>Costco</p>
                <p>{lastId.costco}</p>
              </div>
              <div className="content">
                <p>Visa</p>
                <p>{lastId.visa}</p>
              </div>
              <div className="content">
                <p>Tellus</p>
                <p>{lastId.tellus}</p>
              </div>
              <div className="content">
                <p>MSP</p>
                <p>{lastId.msp}</p>
              </div>
              <div className="content">
                <p>ICBC</p>
                <p>{lastId.icbc}</p>
              </div>





            </div>
            <div className="rightColumn">
            <div className="content">
                  <p>Rent</p>
                  <p>{lastId.rent}</p>
                </div>
                <div className="content">
                  <p>M.fee</p>
                  <p>{lastId.mfee}</p>
                </div>
                <div className="content">
                  <p>Others</p>
                  <p>{lastId.others}</p>
                </div>
                <div className="content">
                  <p>BC Hydro</p>
                  <p>{lastId.bcHydro}</p>
                </div>
                <div className="content">
                  <p>Day Care</p>
                  <p>{lastId.dayCare}</p>
                </div>
            </div>
          </Main>

        </Left>

        <Right>
          <Revenues />
          <div className='buttons'>
            <button>Edit</button>
            <button type="button" onClick={ sumOnclick }>Calculate</button>
          </div>
        </Right>
      </Table>

      <Bottom>
        <div className="total">
          <div className="amount">
            <p>Amount</p>
            <p>$ {lastId.amount}</p>
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
      </Bottom>

    </Container>
  );
};

export default HomePage;
