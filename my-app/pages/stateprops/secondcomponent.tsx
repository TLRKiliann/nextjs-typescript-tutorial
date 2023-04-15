import React from 'react'
import { InputProps } from '../../types/types.propsvalues'

const SecondComponent = (props: InputProps) => {

  return (
    <>
      <div className="flex flex-col">
        <h2 className="m-4">SecondComponent</h2>
        <input
          type="text"
          value={props.initVal}
          onChange={props.handleInputChange}
          className="w-200 h-10 m-auto text-blue-800"
        />
        <button type="button" onClick={props.handleInputBtn}
          className="mt-4 mr-80 ml-80 p-2 text-lg bg-slate-600 border rounded-lg">
          Enter
        </button>
        <span>{props.arrayTodo}</span>
      </div>
    </>
  )
}

export default SecondComponent