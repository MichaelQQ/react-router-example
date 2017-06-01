import React from 'react'
import { connect } from 'react-redux'

import { increase, decrease, initAmount } from './action'

class Counter extends React.Component {
  componentWillMount () {
    const { init } = this.props.match.params
    this.props.dispatch(initAmount(init))
  }
  
  render () {
    const { counter, dispatch } = this.props
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={() => dispatch(increase())}>+</button>
        <div>{counter.currentAmount}</div>
        {/* <div>{counter.get('currentAmount')}</div> */}
        <button onClick={() => dispatch(decrease())}>-</button>
      </div>  
    )
  }
}

const mapStateToProps = (state) => ({ counter: state.counter })

export default connect(mapStateToProps, null)(Counter)