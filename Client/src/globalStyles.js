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
    background: #f1f1f1
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
  body
{
  overscroll-behavior-y: contain;
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
  background: #767ED9;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  box-shadow: 2px 5px 5px 0px  #767ED990;

  &:hover {
    transition: all 0.01s ease-out;
    box-shadow: inset 0 0 5px #1c1e32;
  }


`;

export const Theme = {
  purple: '#767ED9',
  darkPurple: '#1c1e32'

  /*   background: '#1c1e32',
    success: '#38D86A',
    error: '#e6565e' */

}

export default GlobalStyle;
