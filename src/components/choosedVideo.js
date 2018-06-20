import React, {Component} from 'react'
import ResponsiveEmbed from 'react-responsive-embed'

export default class ChoosedVideo extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        const srcVideo = "https://www.youtube.com/embed/".concat(this.props.video.id)
        return(
            <div className='videoEscolhido'>
                <div>
                   <ResponsiveEmbed src={srcVideo} allowFullScreen="allowFullScreen" />
                </div>
                <div className='titleLike'>
                    <h4 className='titleVideo'>{this.props.video.title}</h4>
                    <button className='like' value={this.props.video.likes} onClick={()=>this.props.getLike(this.props.video)} 
                    style={this.props.video.liked ? {backgroundColor:'red'}:{color:'white'}}><i className='fa fa-heart'></i>Gostei!</button>
                </div>
            </div>
        )
    }
}