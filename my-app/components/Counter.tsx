import { useReducer } from 'react'

type CounterState = {
  count: number;
}

type CounterUpdate = {
  type: 'decrement' | 'increment';
  payload: number;
}

type ResetAction = {
  type: 'reset';
}

type CounterAction = ResetAction | CounterUpdate

const initialCount = {count: 0}

function reducer(state: CounterState, action: CounterAction) {
  switch(action.type) {
  case 'increment':
    return {count: state.count + action.payload}
  case 'decrement':
    return {count: state.count - action.payload}
  case 'reset':
    return initialCount
  default:
    return state
  }
}

const Counter = () => {

  const [state, dispatch] = useReducer(reducer, initialCount)
  
  return (
    <>
      <h2 className="m-4 text-center text-3xl">Counter: {state.count}</h2>
      <div className="flex justify-around">
        <button 
          className="px-10 py-3 bg-green-600 border rounded-lg"
          onClick={() => dispatch({type: 'increment', payload: 10})}
        >
          +10
        </button>
        <button
          className="px-10 py-3 bg-red-600 border rounded-lg"
          onClick={() => dispatch({type: 'decrement', payload: 10})}
        >
          -10
        </button>
        <button
          className="px-10 py-3 bg-blue-600 border rounded-lg"
          onClick={() => dispatch({type: 'reset'})}
        >
          Reset
        </button>
      </div>
    </>
  )
}

export default Counter
