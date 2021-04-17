import styled from 'styled-components';

export const Container = styled.div`

`;

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