// Counter Component
// const initState = Immutable.Map({
//   currentAmount: 0
// })
const initState = { currentAmount: 0 }

const reducer = (state = initState, action) => {
  // console.log(state)
  switch (action.type) {
    case 'INCREMENT':
      // return state.set('currentAmount', state.get('currentAmount') + 1)
      return {
      	...state,
      	currentAmount: state.currentAmount + 1
      }
    case 'DECREMENT':
      // return state.set('currentAmount', state.get('currentAmount') - 1)
      return  {
      	...state,
      	currentAmount: state.currentAmount - 1
      }
    case 'INIT':
      // return state.set('currentAmount', state.get('currentAmount') - 1)
      return  {
      	...state,
      	currentAmount: +action.value
      }
    default:
      return state
  }
}

export default reducer