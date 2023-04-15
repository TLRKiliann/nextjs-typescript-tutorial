import React from 'react'
import { MixedProps } from '../types/types.propsvalues'

const ThirdComponent = ({ 
  click,
  initVal,
  arrayTodo,
  handleClick,
  handleInputBtn,
  handleInputChange}: MixedProps) => {

  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <h2 className="m-4">ThirdComponent here !</h2>
          <input 
            type="text" 
            value={initVal} 
            onChange={handleInputChange}
            className="h-7 text-blue-800"
          />
          
          <button type="button" onClick={handleInputBtn}
            className="ml-4 px-4 text-lg bg-slate-600 border rounded-lg"
          >
            Enter
          </button>
          
          <button type="button" onClick={handleClick}
            className="ml-4 px-4 text-lg bg-slate-600 border rounded-lg"
          >
            {click ? "Clicked" : "Click Me !!!"}
          </button>
        </div>
        <span className="flex justify-center text-2xl text-orange-400">
          {arrayTodo}
        </span>
      </div>
    </>
  )
}

export default ThirdComponent
