import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactNavbar from './components/BsNavbar.js';
import Content from './components/Content.js';

import {
  HashRouter
} from "react-router-dom";

const routes = [
  {
    name: 'Home',
    route: '/'
  },
  {
    name: 'Extract',
    route: '/extract'
  },
  {
    name: 'Files',
    route: '/files'
  }
];

class App extends React.Component{
  
  render() {
    return(
      <>
        <HashRouter>
          <ReactNavbar routes={routes} />
          <Content />
        </HashRouter>
      </>
    );
  }
}

export default App;
