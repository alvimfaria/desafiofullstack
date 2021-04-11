import React from "react";
import { Globalstyle, Header } from './styles/global'

import SearchPage from './page/search'
import Logo from './assets/logo-moblee-white.svg'


function App() {
  return (
    <>
    <Header>
        <Globalstyle/>
        <img src={Logo} alt="Airbnb logo" />
    </Header>
      <SearchPage/>
    </>
    
    
  );
}

export default App;
