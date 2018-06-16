import React, { Component } from 'react';
import axios from 'axios'
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
import './css/likeButton.css'




const URL = 'http://demo6669321.mockable.io/videos';
export default class App extends Component{

  constructor(props){
    super(props)
    this.troca=this.troca.bind(this)
    this.pesquisar = this.pesquisar.bind(this)
    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.addVideo = this.addVideo.bind(this)
    this.state = {dado: '', acervo:[], resposta:[], modal: false}
    this.pesquisar()
  }

  troca(e){ //copia o que está no formulario para os states, permitindo a comunicação entre os components
    const target = e.target;
    const value = target.type == 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  pesquisar(){ 
    axios.get(`${URL}`)
    .then(resp => {
      this.setState({acervo: resp.data.videos.filter(item => item.title.includes(this.state.dado))})
      if(this.state.dado=='') this.setState({acervo: resp.data.videos})
      if(this.state.option=='Views') this.setState({...this.state, acervo: (this.state.acervo.sort((a,b)=>b.views-a.views))})
      if(this.state.option=='Likes') this.setState({...this.state, acervo: (this.state.acervo.sort((a,b)=>b.likes-a.likes))})  
      }
    )
  }

  addVideo(){ //not possible
    const id=this.state.idNewVideo
    const title = this.state.titleNewVideo
    const likes = 0
    const views = 0
      axios.post(`${URL}`, {id, title, views, likes})
        .then(resp =>{
            this.pesquisar()
        })
  }

  showModal(){
    this.setState({...this.state, modal: true})
  }

  closeModal(){
    this.setState({...this.state, modal: false})
  }


      render(){
        return(
          <div>
            <Header />
            <PesquisaAcervo 
              troca={this.troca} 
              pesquisar={this.pesquisar} 
              open={this.state.modal} 
              close={this.closeModal} 
              showModal={this.showModal}
              addVideo={this.addVideo}
              checkedLike={this.checkedLike}
              checkedView={this.checkedView}
            />
            <Acervo acervo={this.state.acervo}/>
          </div>
        );
      }
}