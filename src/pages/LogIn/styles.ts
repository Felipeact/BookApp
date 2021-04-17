    import styled from 'styled-components';


    export const Container = styled.div`
        width: 1255px;
        height: 90vh;

        margin: 40px auto;

        background: var(--white);
        border-radius: 24px;

        > header {
    display: flex;
    flex-direction: row;

    
    
    >div {
        margin-left: 32px;
        margin-top: 15px;

        > h1 + h1 {
        margin-left: 132px;
        margin-right: 50px;
        }
    }
    }

        >.wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 100%;

            > .contentImg img {
                display: flex;
                width: 60%;
                margin: 40px auto;
            }

            > .formLog {
                width: 80%;
                display: flex;
                margin-top: 15px;
                justify-content: center;

                .form {
                    display: flex;
                    flex-direction: column;
                    width: 80%;
                    margin-top: 16px;
                }
                
                h1 {
                    color: var(--purple);
                    text-align: center;
                    margin-bottom: 33px;
                }
                
                label {
                    color: var(--black);

                    font-weight: normal;
                    line-height: 48px;
                    font-size: 24px;
                }

                .InputForm {
                    width: 100%;
                    height: 35px;
                    background-color: var(--white);
                    border: 1px solid var(--black);
                    box-sizing: border-box;
                    border-radius: 8px; 
                    margin-top: 15px;
                    margin-bottom: 15px;

                    font-size: 18px;
                    padding: 10px;
                }

                button {
                    width: 100%;
                    height: 35px;
                    background: var(--purple);
                    color: var(--white);
                    border-radius: 8px;
                    border: none;
                    margin-top: 22px;

                    font-size: 24px;


                }
            }
        }
    `;

    export const Header = styled.div``;
