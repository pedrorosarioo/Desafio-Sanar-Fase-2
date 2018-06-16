import React, { Component } from 'react'
import Modal from 'react-responsive-modal'


export default props => (
<div className='searchStuff'> 
    <div className="search">
        <input className="form-control" type="text" name="dado" onChange={props.troca} placeholder="   Digite o título do vídeo"/>
        <button className="btn btn-primary" onClick={props.pesquisar}><i className="fa fa-search"></i> Pesquisar</button>
        <button className="btn btn-secundary" onClick={props.showModal}><i className="fa fa-plus"></i> Add</button>
    </div>
        <Modal open={props.open} onClose={props.close}>
            <div className='formAddVideo'>
                <input className='form-control' name="idNewVideo" onChange={props.troca} type="text" placeholder="   Digite o ID do vídeo"/>
                <input className='form-control' name="titleNewVideo" onChange={props.troca} type="text" placeholder="   Digite o título do vídeo"/>
                <button type="button" className="btn btn-success" onClick={props.addVideo}><i className="fa fa-plus"></i> Adcionar vídeo </button>
            </div>
        </Modal>
    <div className="checkBoxes">
        <h4>Pesquisar por:</h4>
        <select className='form-control form-control-sm' name='option' onChange={props.troca}>
            <option>Nenhum</option>
            <option>Likes</option>
            <option>Views</option>
        </select>
    </div>
</div>
)