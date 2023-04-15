import React from 'react'
import { InputProps } from '../types/types.propsvalues'

const SecondComponent = (props: InputProps) => {

  return (
    <>
      <div>
        <hr className="mt-10 mb-10"/>
        <div className="flex items-center justify-center">
          <h2 className="m-4">SecondComponent</h2>
          <input
            type="text"
            value={props.initVal}
            onChange={props.handleInputChange}
            className="h-7 text-blue-800"
          />
          <button type="button" onClick={props.handleInputBtn}
            className="ml-4 px-4 text-lg bg-slate-600 border rounded-lg">
            Enter
          </button>
        </div>
        <span className="flex justify-center text-2xl text-orange-400">
          {props.arrayTodo}
        </span>
        <hr className="mt-10 mb-10"/>
      </div>
    </>
  )
}

export default SecondComponent