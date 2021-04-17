
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Container } from './styles';

export const Getuser = JSON.parse(sessionStorage.getItem('@App:user') || '{}')

function Header() {


  const { data } = useFetch('statements');

  if (!data) {
    return <p>Carregando...</p>
  }

  const lastId = (data[data.length - 1].id)


  
  return (
    <Container>
      <header>
        <div>
          <Link to="/">  
          <h1>Statement</h1>
          <h1>BookApp</h1>
          </Link>
        </div>
        <a href={`/calendary/${lastId}`}>Calendar</a>
        <a href="/expenses">Expenses</a>
        <a href="/revenue">Balance</a>

        <div>
          <img src="icons/SemImage.jpg" alt=""/> 

        </div>
      </header>
      
    </Container>
  );
};

export default Header;
