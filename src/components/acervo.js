import React, {Component} from 'react'
import Thumb from './thumb'


export default class Acervo extends Component{
    constructor(props){
        super(props)
    }
    

    render(){
        
        return(
        <div>
            <div style={{borderTop: '1px solid rgb(206,212,218)', margin: '0px 30px'}}></div>
                <div className='listaAcervo'>
                    {this.props.acervo.map(video => 
                    <Thumb imgvideo={video.id} title={video.title} likes={video.likes} views={video.views}/> 
                    )} 
                </div>
            </div>
        );
    }
}