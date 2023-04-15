import React from 'react'

export type InputProps = {
  initVal: string;
  arrayTodo: Array<initVal>;
  handleInputChange: React.Dispatch<React.SetStateAction<initVal>>;
  handleInputBtn: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type ButtonProps = {
  click: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export type MixedProps = {
  InputProps,
  ButtonProps
}