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

    > select {
      color: var(--purple);
      font-size: 22px;
      border: none; 
      text-transform: uppercase;

      
    }

    > .previousBalance {
      display: flex;
      justify-content: center;
      align-items: center;
      

      > p {
        font-size: 20px;
        font-weight: 500;
        line-height: 38.28px;
        margin-right: 37px;

        & + p {
          color: var(--green);
          
        }
      }
    }

    

  }

  >.line {
      border: 1px solid var(--gray);
      width: 81%;
      margin-top: 15px
    }

  
`

export const Right = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 60vh;

div {
  margin-top: 10px;

  h1 {
    color: var(--purple);
  }

  p {
    font-size: 24px;
    color: var(--green);
    margin-top: 10px;
    }
}
`
