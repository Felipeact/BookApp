import styled from 'styled-components';

export const Container = styled.div`
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
`;
