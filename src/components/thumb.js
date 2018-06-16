import React, {Component} from 'react'
import '../css/thumb.css'
import Modal from 'react-responsive-modal'

import ChoosedVideo from './choosedVideo'


export default class Thumb extends Component{
    constructor(props){

        super(props);
        this.state = ({modalOpen: false, videoLiked: false, nLikes: this.props.likes, id: this.props.imgvideo, title: this.props.title, colorHeart: 'black', watches: 'black',nViews: this.props.views})
        this.onOpenVideo = this.onOpenVideo.bind(this)
        this.onCloseModal = this.onCloseModal.bind(this)
        this.colorChange = this.colorChange.bind(this)
        this.updateViews = this.updateViews.bind(this)
    }


    colorChange(){
        const likes = this.props.likes
        if (this.state.nLikes==likes){
            this.setState({...this.state, nLikes: likes+1, colorHeart: 'red', videoLiked: true, newColor: {backgroundColor: 'rgb(202, 34, 34)'}})
        }else{
            this.setState({...this.state, nLikes: likes, colorHeart: 'black', videoLiked: false, newColor: {backgroundColor: '#eb9797'}})
        }
    }

    updateViews(){
        var views = this.state.nViews
        this.setState({...this.state, nViews: views+1, watches: 'rgb(32,38,119)'})
    }

    onOpenVideo(){
        this.setState({modalOpen: true})
    }

    onCloseModal(){
        this.updateViews()
        this.setState({modalOpen: false})
    }
    
    render(){
        const modalOpen = this.state.modalOpen
        return (
            <div className='borderThumb'>
                <img className='imgThumb' onClick={this.onOpenVideo} src={"https://i.ytimg.com/vi/".concat(this.props.imgvideo, '/hqdefault.jpg')}/>
                <h3 className= 'titleThumb'><span onClick={this.onOpenVideo}>{this.props.title}</span></h3>
                <div className='scoresThumb'>
                    <button className='inv-button' onClick={this.onOpenVideo}><i className='fa fa-eye'  style={{color:this.props.watches}}></i><span className='watched'>{this.props.views}</span></button>
                    <button className='inv-button' onClick={this.colorChange}><i className='fa fa-heart' style={{color:this.state.colorHeart}}></i><span className='liked'>{this.props.likes}</span></button>
                </div>
                <Modal open={modalOpen} onClose={this.onCloseModal} center>
                    <ChoosedVideo likes={this.props.likes} id={this.props.imgvideo} title={this.props.title} colorChange={this.colorChange} colorButton={this.state.newColor} updateView={this.updateViews}/>
                </Modal>
            </div>
        )
    }
}