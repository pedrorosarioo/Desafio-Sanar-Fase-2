import React, {Component} from 'react'

export default class LikeButton extends Component {
    render() {
      const label = this.props.liked ? this.props.likes+1 : this.props.likes
      const color = this.props.liked ? {backgroundColor: 'rgb(202, 34, 34)'} : {backgroundColor: '#eb9797'}
      return (
        <div className='changeButtons'>
          <button className='btn btn-primary' onClick={this.props.handleClick} style={color}>
            <i className='fa fa-heart'></i>{label}</button>
        </div>
      );
    }
  }
  