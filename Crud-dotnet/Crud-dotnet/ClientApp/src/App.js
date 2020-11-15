import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ListUser } from './components/ListUser';
import { Editar } from './components/Editar';
import { CadastroUsuario } from './components/CadastroUsuario';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home}/>
            <Route path='/listUser' component={ListUser}/>
            <Route path='/editar' component={Editar}/>
            <Route path='/cadastroUsuario' component={CadastroUsuario}/>
      </Layout>
    );
  }
}
