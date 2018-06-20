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
            <h1>Ultimos videos:</h1>
                <div className='listaAcervo'>
                    {this.props.acervo.map(video =>
                        <Thumb key={video._id} imgvideo={video.id} title={video.title} likes={video.likes} views={video.views} liked={video.liked} thumb={video} 
                        getLike={this.props.getLike} getViews={this.props.getViews}/>
                    )} 
                </div>
            </div>
        );
    }
}