import styled from 'styled-components';

const getStyle = (type) => {
  if (type === "violet") {
    return `
    border-radius: 100px 100px 100px 100px;
    width: 30px;
    height: 30px;
    margin-right: 50px;
    
    
      background: #ba55d3;
    `;
  }
  if (type === "red") {
    return `
    border-radius: 100px 100px 100px 100px;
    width: 30px;
    height: 30px;
    background: #cf3e26;
    `;
  }
};  
export const ButtonContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  width: 50%;
  color: white;
  font-size: 0.9rem;
  transition: 0.3s;
  :hover{
      cursor: pointer;
      opacity: 60%;
  }
  ${(props) => getStyle(props.type)}
`;
