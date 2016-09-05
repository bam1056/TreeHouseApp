import React, { Component } from 'react'
import Stats from './Stats'

class Header extends Component {
  render () {
    const { title } = this.props
    return (
      <div className='header'>
        <Stats players={this.props.players} />
        <h1>{title}</h1>
      </div>
    )
  }
}
Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired
}
export default Header
