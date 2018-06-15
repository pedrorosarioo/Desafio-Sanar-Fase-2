import React, {Component} from 'react'

export default class Thumb extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className='borderThumb'>
                <img className='imgThumb' src='https://i.ytimg.com/vi/#/hqdefault.jpg'/>
                <h3 className= 'titleThumb'>#Titulo</h3>
                <div className='scoresThumb'>
                    <i className='fa fa-eye'></i><span className='watched'>#Views</span>
                    <i className='fa fa-heart'></i><span className='liked'>#Likes</span>
                </div>
            </div>
        )
    }
}