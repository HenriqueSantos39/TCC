import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Usuario from "./paginas/Usuario"

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/Home"/>
           <Route component = { Sobre }  path="/sobre" />
           <Route component = { Usuario }  path="/usuario" />
       </BrowserRouter>
   )
}

export default Routes;