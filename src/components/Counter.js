import React, { Component } from 'react'

class Counter extends Component {
  render () {
    const { score } = this.props
    return (
      <div className='counter'>
        <button className='counter-action decrement'> - </button>
        <div className='counter-score'> {score} </div>
        <button className='counter-action increment'> + </button>
      </div>
    )
  }
}
Counter.propTypes = {
  score: React.PropTypes.number.isRequired
}
export default Counter
