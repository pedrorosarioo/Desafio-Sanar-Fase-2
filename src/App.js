import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Header from './components/resume'
import Acervo from './components/acervo'
import PesquisaAcervo from './components/pesquisaAcervo'

import './css/header.css'
import './css/resume.css'
import './css/pesquisa.css'
import './css/pesquisaAcervo.css'



export default class App extends Component{

      render(){
        return(
          <div>
            <Header />
            <PesquisaAcervo/>
            <Acervo />
          </div>
        );
      }
}