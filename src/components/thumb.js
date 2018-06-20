import React, {Component} from 'react'
import '../css/thumb.css'
import Modal from 'react-responsive-modal'

import ChoosedVideo from './choosedVideo'


export default class Thumb extends Component{
    constructor(props){

        super(props);
        this.state = ({modalOpen: false, videoLiked: this.props.liked, nLikes: this.props.likes, id: this.props.imgvideo, title: this.props.title, colorHeart: 'black', watches: 'black',nViews: this.props.views})
        this.onOpenVideo = this.onOpenVideo.bind(this)
        this.onCloseModal = this.onCloseModal.bind(this)
        this.updateViews = this.updateViews.bind(this)
    }

    updateViews(){
        var views = this.state.nViews
        this.setState({...this.state, nViews: views+1, watches: 'rgb(32,38,119)'})
    }

    onOpenVideo(){
        this.setState({modalOpen: true})
        return this.props.getViews(this.props.thumb)
    }

    onCloseModal(){
        this.setState({modalOpen: false})
    }
    
    render(){
        const modalOpen = this.state.modalOpen
        const likes = this.props.likes
        return (
            <div className='borderThumb'>
                <img className='imgThumb' onClick={this.onOpenVideo} src={"https://i.ytimg.com/vi/".concat(this.props.imgvideo, '/hqdefault.jpg')}/>
                <h3 className= 'titleThumb'><span onClick={this.onOpenVideo}>{this.props.title}</span></h3>
                <div className='scoresThumb'>
                    
                    <button className='inv-button' value={this.props.imgvideo} onClick={this.onOpenVideo}><i className='fa fa-eye'  style={{color:this.props.watches}}></i><span className='watched'>{this.props.views}</span></button>
                    
                    <button className='inv-button' value={this.props.title} onClick={()=>this.props.getLike(this.props.thumb)}><i className='fa fa-heart liked'
                    style={this.props.liked ? {color:'red'}:{color:'black'}}></i><span className='likedText'>{likes}</span></button>
                
                </div>
                <Modal open={modalOpen} onClose={this.onCloseModal} center>
                    <ChoosedVideo video={this.props.thumb} getLike={this.props.getLike}/>
                </Modal>
            </div>
        )
    }
}