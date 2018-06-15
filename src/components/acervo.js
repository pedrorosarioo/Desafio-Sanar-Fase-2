import React, {Component} from 'react'
import axios from 'axios'
import Thumb from './thumb'

const URL = 'http://demo6669321.mockable.io/videos';

export default class Acervo extends Component{
    constructor(props){
        super(props)
        this.state = { acervo: []}
        this.searchVideo = this.searchVideo.bind(this)

        this.searchVideo()
    }
    
    searchVideo(){
        axios.get(`${URL}`)
            .then(resp => {
                this.setState({acervo: resp.data.videos})
                console.log(this.state.acervo)
            })
    }

    render(){
        return(
            <div>
                <div className='listaAcervo'>
                    {this.state.acervo.map(video => 
                    <Thumb imgvideo={video.id} title={video.title} likes={video.likes} views={video.views}/> 
                    )} 
                </div>
            </div>
        );
    }
}