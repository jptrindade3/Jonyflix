/*
https://github.com/imersao-alura/aluraflix
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//Pages
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  
  /* É utilizando o browser router que poderemos
  trabarlhar com a nossa página react como SPA,
  portanto, deixamos de lado a maneira original 
  com a qual o react chama o App 

    <React.StrictMode>
      <App />
    </React.StrictMode>,

  Logo acima, temos a maneira como o código vem na
  instalação, trocamos pelo modelo que está aqui 
  abaixo, usando o BrowserRouter

  O Switch trabalha com qual a seleção de rotas do
  seu App e o Route é o responsável por encaminhar
  as suas rotas, te levar onde você quer, sem recar-
  regar a página.

  Lembre de utilizar o { Link } nos componentes de
  interesse, se não, não funciona
  */
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} exact/>
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
      <Route component={() => (<div>Página 404</div>)} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

