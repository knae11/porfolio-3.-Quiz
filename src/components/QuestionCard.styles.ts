import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: blue;
  border-radius: 10px;
  border: 2px solid gray;
  text-align: center;

  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition : all 0.3s ease;

  :hover{
    opacity: 0.8;
  }

  button{
    cursor: pointer;
    user-select:nonel
    font-size: 0.8rem;
    width : 100%;
    height : 40px;
    margin : 5px 0;
    background : ${({ correct, userClicked }) =>
      correct ? "green" : !correct && userClicked ? "red" : "lightgray"};
    border : 3px solid blue;
  }
`;