import React from 'react'
import { ButtonProps } from '../types/types.values'

const FirstComponent = (props: ButtonProps) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <h2 className="m-4">button with props (/components/firstcomponent.tsx)</h2>
        <button type="button" onClick={props.handleClick}
          className="px-4 text-lg bg-slate-600 border rounded-lg"
        >
          {props.click ? "Clicked" : "Click Me !"}
        </button>
      </div>
    </>
  )
}

export default FirstComponent