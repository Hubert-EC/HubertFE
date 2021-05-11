import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  background: rgba(255, 255, 255, 0.54);
  border: 3px solid #1768A3;
  box-sizing: border-box;
  border-radius: 15px;
  font-weight: bold;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #1768A3;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#00FFFF' : '#4B59F7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const ButtonOder = styled.button`
  background: #1768A3;
  border: 3px solid #1768A3;
  box-sizing: border-box;
  font-weight: bold;
  padding: 12px 64px;
  color: #fff;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 15px 15px 10px rgba(0, 0, 0, 0.25);
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#00FFFF' : '#4B59F7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
