import React, {Component} from 'react'
import '../css/thumb.css'
import Modal from 'react-responsive-modal'
import LikeButton from './likeButton'
import ViewButton from './viewButton'

import ChoosedVideo from './choosedVideo'


export default class Thumb extends Component{
    constructor(props){

        super(props);
        this.state = ({modalOpen: false, liked: false, viewd: false, nLikes: this.props.likes, id: this.props.imgvideo, title: this.props.title, colorHeart: 'black', watches: 'black',nViews: this.props.views})
        this.onOpenVideo = this.onOpenVideo.bind(this)
        this.onCloseModal = this.onCloseModal.bind(this)
        this.colorChange = this.colorChange.bind(this)
        this.updateViews = this.updateViews.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.watchCount = this.watchCount.bind(this)
    }


    handleClick() {
        this.setState({
          liked: !this.state.liked
        });
        console.log(this.state.liked)
      }
    
    watchCount(){
        this.setState({...this.state, viewd: true, modalOpen: true})
    }

    colorChange(){
        const likes = this.props.likes
        if (this.state.nLikes==likes){
            this.setState({...this.state, nLikes: likes+1, colorHeart: 'red', liked: true, newColor: {backgroundColor: 'rgb(202, 34, 34)'}})
        }else{
            this.setState({...this.state, nLikes: likes, colorHeart: 'black', liked: false, newColor: {backgroundColor: '#eb9797'}})
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
                    <ViewButton watchCount={this.watchCount} views={this.state.nViews} viewd={this.state.viewd} />
                    <LikeButton handleClick={this.handleClick} liked={this.state.liked} likes={this.props.likes}/>
                </div>
                <Modal open={modalOpen} onClose={this.onCloseModal} center>
                    <ChoosedVideo likes={this.props.likes} id={this.props.imgvideo} title={this.props.title} colorChange={this.colorChange} colorButton={this.state.newColor} updateView={this.updateViews}/>
                </Modal>
            </div>
        )
    }
}