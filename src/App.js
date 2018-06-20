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
    this.updateThumb=this.updateThumb.bind(this)
    this.pesquisar = this.pesquisar.bind(this)
    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.addVideo = this.addVideo.bind(this)
    this.getLike = this.getLike.bind(this)
    this.getViews = this.getViews.bind(this)
    this.state = {dado: '', acervo:[], resposta:[], modal: false}
    this.consomeAPI()
  }

  troca(e){ //copia o que está no formulario para os states, permitindo a comunicação entre os components
    const target = e.target;
    const value = target.type == 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  consomeAPI(){
    axios.get(`${URL}`)
    .then(resp => {
      this.setState({acervo: resp.data.videos})
      this.state.acervo.forEach(item=>item.liked=false)
      this.pesquisar()
      }
    )
  }

  getLike(video){
    video.liked = video.liked ? false:true
    video.likes+= video.liked ? 1:-1
    this.setState({...this.state.acervo.find(item=>item.id===video.id), liked:video.liked, likes:video.likes})
    console.log(video)
  }

  getViews(video){
    video.views+=1
    this.setState({...this.state.acervo.find(item=>item.id===video.id), views:video.views})
    console.log(video)
  }

  pesquisar(){ 
    this.setState({resposta: this.state.acervo.slice()})
    this.state.resposta = this.state.acervo.slice()
    if (this.state.option==='Likes') this.setState({resposta: this.state.resposta.sort((a,b)=>b.likes-a.likes)})
    if (this.state.option==='Views') this.setState({resposta: this.state.resposta.sort((a,b)=>b.views-a.views)})
    if (this.state.dado!='') this.setState({resposta: this.state.resposta.filter(item=>item.title.toLowerCase().includes(this.state.dado.toLowerCase()))})
  }

  addVideo(){ //not possible
    const id=this.state.idNewVideo
    const title = this.state.titleNewVideo
    const likes = 0
    const views = 0
    this.state.acervo.push({id,title,likes,views,liked:false})
    this.pesquisar()
  }

  updateThumb(e){
    this.state.acervo.forEach(item=>{
      if (item.title===e.target.value){
        item.liked=true;
      }
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
            <Acervo acervo={this.state.resposta} getLike={this.getLike} getViews={this.getViews}/>
          </div>
        );
      }
}