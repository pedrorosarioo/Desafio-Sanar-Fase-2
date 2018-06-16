import React, {Component} from 'react'
import ResponsiveEmbed from 'react-responsive-embed'

export default class ChoosedVideo extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        const srcVideo = "https://www.youtube.com/embed/".concat(this.props.id)
        return(
            <div className='videoEscolhido'>
                <div>
                   <ResponsiveEmbed src={srcVideo} allowfullscreen="allowfullscreen" />
                </div>
                <div className='titleLike'>
                    <h4 className='titleVideo'>{this.props.title}</h4>
                    <button className='like' value={this.props.likes} onClick={this.props.colorChange} style={this.props.colorButton}><i className='fa fa-heart'></i>Gostei!</button>
                </div>
            </div>
        )
    }
}