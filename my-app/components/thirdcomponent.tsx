import React from 'react'
import { MixedProps } from '../types/types.propsvalues'
//import dynamic from 'next/dynamic'

const ThirdComponent = ({ 
  click,
  initVal,
  arrayTodo,
  handleClick,
  handleInputBtn,
  handleInputChange}: MixedProps) => {

  return (
    <>
      <div className="flex flex-col">
        <h2 className="m-4">ThirdComponent here !</h2>
        <input 
          type="text" 
          value={initVal} 
          onChange={handleInputChange}
          className="w-200 h-10 m-auto text-blue-800"
        />
        
        <button type="button" onClick={handleInputBtn}
          className="mt-10 mr-80 ml-80 p-2 text-lg bg-slate-600 border rounded-lg"
        >
          Enter
        </button>
        
        <button type="button" onClick={handleClick}
          className="mt-10 mr-80 ml-80 p-2 text-lg bg-slate-600 border rounded-lg"
        >
          {click ? "Clicked" : "Click Me !!!"}
        </button>
        
        <span className="text-orange-400">{arrayTodo}</span>
      </div>
    </>
  )
}

export default ThirdComponent
//export default dynamic(() => Promise.resolve(ThirdComponent, {ssr:false}))