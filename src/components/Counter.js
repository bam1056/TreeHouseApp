import React, { Component } from 'react'

class Counter extends Component {
  static propTypes = {
    score: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
  }

  incrementScore = () => {
    this.props.onChange(+1)
  }

  decrementScore = () => {
    this.props.onChange(-1)
  }

  render () {
    const { score } = this.props
    return (
      <div className='counter'>
        <button onClick={this.decrementScore} className='counter-action decrement'> - </button>
        <div className='counter-score'> {score} </div>
        <button onClick={this.incrementScore} className='counter-action increment'> + </button>
      </div>
    )
  }
}

export default Counter
