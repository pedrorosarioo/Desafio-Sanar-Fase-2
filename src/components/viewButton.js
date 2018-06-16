import React, {Component} from 'react'

export default class ViewButton extends Component {
    render() {
      const label = this.props.views
      const color = this.props.viewd ? {backgroundColor: 'rgb(63, 72, 204)'} : {backgroundColor: 'rgb(0,162,232)'}
      return (
        <div className='changeButtons'>
          <button className='btn btn-secondary' onClick={this.props.watchCount} style={color}>
            <i className='fa fa-eye'></i>{label}</button>
        </div>
      );
    }
  }