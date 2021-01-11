import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  user-select: none;
  -moz-user-select: none;
  
  body {
    background: #1c1e32
  } 
   
  body::-webkit-scrollbar {
    width: 8px;
  }
  
  body::-webkit-scrollbar-track {
    background: #1c1e32;
  }
  
  body::-webkit-scrollbar-thumb {
    background: #696fff;
    border-radius: 10px;
  }
 } 
`;


export const Container = styled.div`
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? Theme.primary : Theme.secondary)};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.1s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? Theme.primary + 99 : Theme.secondary + 99)};
  }

`;

export const Theme = {
  purple: '#767ED9',

/*   background: '#1c1e32',
  success: '#38D86A',
  error: '#e6565e' */
  
}

export default GlobalStyle;
