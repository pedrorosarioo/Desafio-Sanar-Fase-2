import React, {Component} from 'react'
import '../css/thumb.css'
import Modal from 'react-responsive-modal'

import ChoosedVideo from './choosedVideo'


export default class Thumb extends Component{
    constructor(props){
        super(props);
        this.state = ({modalOpen: false, videoLiked: false, nLikes: this.props.likes, id: this.props.imgvideo, title: this.props.title, colorHeart: 'black', watched: 'black'})
        this.onOpenVideo = this.onOpenVideo.bind(this)
        this.onCloseModal = this.onCloseModal.bind(this)
        this.colorChange = this.colorChange.bind(this)
    }


    colorChange(){
        const likes = this.props.likes
        if (this.state.videoLiked!=true){
            this.setState({...this.state, nLikes: likes+1, colorHeart: 'red', videoLiked: true, newColor: {backgroundColor: 'rgb(202, 34, 34)'}})
            console.log(this.state.nLikes, this.state.videoLiked)
        }
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
                    <i className='fa fa-eye'  style={{color:this.state.watched}}></i><span className='watched'>{this.props.views}</span>
                    <i className='fa fa-heart' style={{color:this.state.colorHeart}}></i><span className='liked'>{this.state.nLikes}</span>
                </div>
                <Modal open={modalOpen} onClose={this.onCloseModal} center>
                    <ChoosedVideo id={this.state.id} title={this.state.title} colorChange={this.colorChange} colorButton={this.state.newColor}/>
                </Modal>
            </div>
        )
    }
}