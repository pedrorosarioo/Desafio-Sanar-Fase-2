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
import './css/acervo.css'
import './css/choosedVideo.css'




export default class App extends Component{

  constructor(props){
    super(props)
    this.troca=this.troca.bind(this)
    this.pesquisar = this.pesquisar.bind(this);
    this.state = {dado: '', list:[]}
  }

  troca(e){ //copia o que está no formulario para 'dados', permitindo a comunicação entre os componenets
    this.setState({...this.state, dado: e.target.value})
  }

  pesquisar(){ //testando bind e função troca
    console.log(this.state.dado)
  }

      render(){
        return(
          <div>
            <Header />
            <PesquisaAcervo troca={this.troca} pesquisar={this.pesquisar}/>
            <Acervo />
          </div>
        );
      }
}