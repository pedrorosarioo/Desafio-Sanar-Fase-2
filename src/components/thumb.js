import React, {Component} from 'react'
import '../css/thumb.css'

export default class Thumb extends Component{
    constructor(props){
        super(props);
        this.state = ({modalOpen: false})
    }
    
    render(){
        var img = "https://i.ytimg.com/vi/".concat(this.props.imgvideo, '/hqdefault.jpg')
        return (
            <div className='borderThumb'>
                <img className='imgThumb' src={img}/>
                <h3 className= 'titleThumb'><span>{this.props.title}</span></h3>
                <div className='scoresThumb'>
                    <i className='fa fa-eye'></i><span className='watched'>{this.props.views}</span>
                    <i className='fa fa-heart'></i><span className='liked'>{this.props.likes}</span>
                </div>
            </div>
        )
    }
}