import styled from 'styled-components';

export const Container = styled.div`
  > header {
  display: flex;
  flex-direction: row;

  
  
  >div {
    margin-left: 32px;
    margin-top: 15px;
    
    > a {
      text-decoration: none;
    
    > h1 {
      color: var(--black)
    }
    
    > h1 + h1 {
      margin-left: 132px;
      margin-right: 50px;
      color: var(--black)
    }
    }

  }

  > a {
    margin-left: 85px;
    margin-top: 35px;

    font-family: 'Radjhani', sans-serif;
    font-weight: 500;
    font-size: 25px;
    line-height: 49.76px;

    text-decoration: none;

    color: var(--black)
  }

  > div img {
    margin-left: 180px;
    
    background: var(--gray);
    object-fit: cover;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    

    
    
  }

}
`;
