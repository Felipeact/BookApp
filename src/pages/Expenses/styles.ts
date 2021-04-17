import styled from 'styled-components';

export const Container = styled.div`
        width: 1255px;
        height: 90vh;

        margin: 40px auto;

        background: var(--white);
        border-radius: 24px;
`;
 
export const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 150px;
  margin-top: 25px;
  height: 45vh;
  

` 
export const Left = styled.div`
display: flex;
flex-direction: column;
margin-left: 112px;

  width: 100%;
  header {
    width: 84%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    > h1 {
      color: var(--purple);
    }
  }

  >.line {
      border: 1px solid var(--gray);
      width: 81%;
      margin-top: 15px
    }

  
`
export const Main = styled.div`
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 30px;
    width: 50%;

  >.leftColumn {
      display: flex;
      flex-direction: column;
      width: 525px;

    >.flex{
        display: flex;
      > label {
        font-size: 24px;
        font-weight: 500;
        line-height: 40px;
        width: 50%;
        display: flex;

     }
         > input {
          color: var(--green);
          font-size: 24px;
          font-weight: 500;
          line-height: 40px;
          width: 40%;
          border: none;
        }
    }

     
    
  }

  >.rightColumn {
      display: flex;
      flex-direction: column;
      width: 380px;

    >.flex{
        display: flex;
      > label {
        font-size: 24px;
        font-weight: 500;
        line-height: 40px;
        width: 50%;
        display: flex;

     }
         > input {
          color: var(--green);
          font-size: 24px;
          font-weight: 500;
          line-height: 40px;
          width: 40%;
          border: none;
        }
    }


      
    
    }
  }


`

export const Bottom = styled.div`
  display: flex;
  flex-direction: colmn;
  justify-content: space-between;
  width: 18%;
  margin: 20px 105px;

  button {
        border: none;
        display:flex;
        width: 100%;
        background: none;
        font-size: 28px;
        font-weight: 500;
        line-height: 40px;
        cursor: pointer;

  }

  >.add {
    display: flex;
    justify-content: space-between;

    > button {
      color: var(--black);
    }
  }

  >.save {
    display: flex;
    justify-content: space-between;

    > button {
      
      color: var(--green);
    }
  }
`