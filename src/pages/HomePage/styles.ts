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
export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 30px;
  width: 50%;


  >.leftColumn {
      display: flex;
      flex-direction: column;
      width: 480px;
      
    .content {
      display: flex;
      justify-content: space-between;

      p {
        font-size: 24px;
        font-weight: 500;
        line-height: 40px;

        & + p {
          color: var(--green)
        }
      }
     
    }
  }

  >.rightColumn {
    width: 380px;
    .content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      
      p {
        font-size: 24px;
        font-weight: 500;
        line-height: 40px;

        & + p {
          color: var(--green)
        }
      }
    }
  }
`
export const Right = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 60vh;

  > .buttons button {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 40px;
    

    border: none;
    border-radius: 15px;
  
    background: var(--purple);

    color: var(--white);
    font-weight: normal;
    line-height: 49px;
    font-size: 20px;
    text-align: center;
    justify-content:center;
    align-items: center;

    & + button {
      background: var(--purple-dark);
      margin-top: 25px;
    } 
  }
`

export const Bottom = styled.div`
  display: flex;
  flex-direction: colmn;
  justify-content: space-between;
  width: 69%;
  margin: 20px 105px;

  >.total {
    display: flex;
    flex-direction: column;
    width: 50%;

    >.amount{
      display: flex;
      justify-content: space-between;
      width: 68%;
      p{
        font-size: 24px;
        font-weight: 500;
        line-height: 40px;
        
        & + p {
          color: var(--red);
        }
      }
    }

    >.totalRev {
      display: flex;
      justify-content: space-between;
      width: 68%;

      p{
        font-size: 24px;
        font-weight: 500;
        line-height: 40px;
        
        & + p {
          color: var(--green);
        }
      }
    }

    
  }
  >.balance {
    width: 40%;
    >.balanceTotal{
      display: flex;
      justify-content: space-between;
      width: 68%;
      p{
        font-size: 24px;
        font-weight: 500;
        line-height: 40px;
        
        & + p {
          color: var(--green);
        }
      }
    }
  }
`