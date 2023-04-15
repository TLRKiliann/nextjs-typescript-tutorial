import React from 'react'
import { ButtonProps } from '../types.values'

const FirstComponent = (props: ButtonProps) => {
  return (
    <>
      <h2 className="m-4">button with props FirstComponent</h2>
      <button type="button" onClick={props.handleClick}
        className="p-2 text-lg bg-slate-600 border rounded-lg"
      >
        {props.click ? "Clicked" : "Click Me !"}
      </button>
    </>
  )
}

export default FirstComponent