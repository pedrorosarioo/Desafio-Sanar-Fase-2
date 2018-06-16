import React, {Component} from 'react'
import '../css/thumb.css'
import Modal from 'react-responsive-modal'

import ChoosedVideo from './choosedVideo'

export default class Thumb extends Component{
    constructor(props){
        super(props);
        this.state = ({modalOpen: false, videoLiked: false})
        this.onOpenVideo = this.onOpenVideo.bind(this)
        this.onCloseModal = this.onCloseModal.bind(this)
    }

    onOpenVideo(){
        this.setState({modalOpen: true})
    }

    onCloseModal(){
        this.setState({modalOpen: false})
    }
    
    render(){
        var img = "https://i.ytimg.com/vi/".concat(this.props.imgvideo, '/hqdefault.jpg')
        const modalOpen = this.state.modalOpen
        const liked = this.state.videoLiked
        return (
            <div className='borderThumb'>
                <img className='imgThumb' onClick={this.onOpenVideo} src={img}/>
                <h3 className= 'titleThumb'><span onClick={this.onOpenVideo}>{this.props.title}</span></h3>
                <div className='scoresThumb'>
                    <i className='fa fa-eye'></i><span className='watched'>{this.props.views}</span>
                    <i className='fa fa-heart'></i><span className='liked'>{this.props.likes}</span>
                </div>
                <Modal open={modalOpen} onClose={this.onCloseModal} center>
                    <ChoosedVideo id={this.props.imgvideo} title={this.props.title} />
                </Modal>
            </div>
        )
    }
}