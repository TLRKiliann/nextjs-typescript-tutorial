import React from 'react'

type ContainerProps = {
  styles: React.CSSProperties
}

const StylesComponent = (props: ContainerProps) => {
  return (
    <>
      <div style={props.styles}>My Styles</div>
    </>
  )
}

export default StylesComponent