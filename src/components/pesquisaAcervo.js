import React, { Component } from 'react'


export default props => (
    <div className="search">
        <input className="form-control" type="text" onChange={props.troca} placeholder="   Digite o título do vídeo"/>
        <button className="btnSearch" onClick={props.pesquisar}><i className="fa fa-search"></i> Pesquisar</button>
    </div>
)