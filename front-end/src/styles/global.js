import styled, { createGlobalStyle } from 'styled-components'

export const Globalstyle = createGlobalStyle`　
body{
　　margin: 0;
　　padding: 0;
   font-family: "Noto Sans",sans-serif;
　}`;



export const Header = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 30vh;
  background: #f36397;
  &:after {
        position: absolute;
        content: "";
        background: url(https://www.moblee.com.br/wp-content/themes/moblee-website-theme/img/patterns/fringe-white-inverted.svg);
        height: .5rem;
        width: 100%;
        left: 0;
        bottom: 0;
  }
  img {
    width: 200px;
    margin: 10px 0 40px;
  }
`;