import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    height:100%;
  }

  body{
    background-color:#00c6ad;
    background-size: cover;
    margin:0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
*{
  box-sizing:border-box;
  font-family:font-family: 'Noto Sans JP', sans-serif;

}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #f85a2b;
    font-weight: 700;
    text-transform: uppercase;
  }
  .score {
    font-weight: 700;
    text-transform: uppercase;
    color: #f85a2b;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    color: #1947e5;
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: #f85a2b;
    font-weight: 700;
    text-transform: uppercase;
    border: 2px solid black;
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;
