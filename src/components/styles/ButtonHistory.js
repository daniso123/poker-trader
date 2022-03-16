import styled from 'styled-components';

export const ButtonContainer2 = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 50px;
  width: 200px;
  border: black double;
  color: black;
  background-color: rgb(248, 245, 252);
  transition: 0.3s;
  margin: 10px 10px;
  font-family:"Press Start 2P",cursive;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
  :hover{
    cursor: pointer;
    background-color: red;
  }
`;