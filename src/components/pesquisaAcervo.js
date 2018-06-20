import React, { Component } from 'react'
import Modal from 'react-responsive-modal'


export default class PesquisaAcervo extends Component{
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler=(e)=>{
        if (e.key==='Enter'){
            e.shiftKey ? this.props.showModal() : this.props.pesquisar()
        }
    }

        
    render(){
        return(
            <div className='searchStuff'> 
                <div className="search">
                    <input className="form-control" type="text" name="dado" onChange={this.props.troca} onKeyUp={this.keyHandler} placeholder="   Digite o título do vídeo"/>
                    <button className="btn btn-primary" onClick={this.props.pesquisar}><i className="fa fa-search"></i> Pesquisar</button>
                    <button className="btn btn-secundary" onClick={this.props.showModal}><i className="fa fa-plus"></i> Add</button>
                </div>
                    <Modal open={this.props.open} onClose={this.props.close} center>
                        <div className='formAddVideo'>
                            <input className='form-control' name="idNewVideo" onChange={this.props.troca} type="text" placeholder="   Digite o ID do vídeo"/>
                            <input className='form-control' name="titleNewVideo" onChange={this.props.troca} type="text" placeholder="   Digite o título do vídeo"/>
                            <button type="button" className="btn btn-success" onClick={this.props.addVideo}><i className="fa fa-plus"></i> Adcionar vídeo </button>
                        </div>
                    </Modal>
                <div className="checkBoxes">
                    <h4>Pesquisar por:</h4>
                    <select className='form-control form-control-sm' name='option' onChange={this.props.troca}>
                        <option>Nenhum</option>
                        <option>Likes</option>
                        <option>Views</option>
                    </select>
                </div>
            </div>
        )
    }
}