const increase = () => (dispatch) => dispatch({ type: 'INCREMENT' })
const decrease = () => (dispatch) => dispatch({ type: 'DECREMENT' })
const initAmount = (number = 0) => (dispatch) => dispatch({ type: 'INIT', value: number })

export {
  increase,
  decrease,
  initAmount
}