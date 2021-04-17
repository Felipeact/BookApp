import styled from 'styled-components';

export const Container = styled.div`
  .profileInfo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;

  width: 1000px;
  margin: 46px auto;
  width: 78%;

  > .infoLeft {
    display: flex;
    flex-direction: column;
    width: 65%;

    > a {
      text-decoration: none;

      color: var(--black);
      font-family: 'Rajdhani', sans-serif;
      font-weight: 600;
      font-size: 25px;
      line-height: 25px;
      color: var(--purple);

      width: 80px;
      margin-bottom: 10px;
    }

    > img {
      background: var(--gray);
      object-fit:cover;
      width:280px;
      height:270px;

      border-radius: 50%;
    }
    
    > div.buttons {
      display: flex;
      flex-direction: row;
      text-align: center;
      justify-content: space-between;
      
      margin-top: 33px;

      > button {
        
        width: 250px;
        height: 50px;
        margin-right: 25px;

        border: none;
        border-radius: 15px;
  
        background: var(--green);

        color: var(--white);
        font-weight: normal;
        line-height: 49px;
        font-size: 20px
      }

      > button + button {
        background: var(--red);
      }
      

    }

  }

  .infoRight form {
    display: flex;
    flex-direction: column;
    

    > label {
      color: var(--purple);

      font-weight: normal;
      line-height: 48px;
      font-size: 24px;

      margin-top: 17px;
    }

    >input {
      width: 350px;
      height: 35px;
      background-color: var(--white);
      border: 1px solid var(--black);
      box-sizing: border-box;
      border-radius: 8px; 
      margin-top: 5px;
      padding: 10px;
      font-size: 18px;
    
    }
  }
}
`;
