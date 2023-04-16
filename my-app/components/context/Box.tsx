import { useContext, useState } from 'react'
import { ThemeContext } from './ThemeContext'

const Box = () => {
  const theme = useContext(ThemeContext)

  const [stateContext, setStateContext] = useState<boolean>(false)

  const handleSwitchContext = () => {
    setStateContext(!stateContext)
  }

  return (
    <>
      {stateContext !== true ? (
        <div style={{backgroundColor: theme.primary.main, color: theme.secondary.text}}>
          <p>Theme context</p>
          <button onClick={handleSwitchContext}>Click Me</button>
        </div>
        ) : (
        <div style={{backgroundColor: theme.secondary.main, color: theme.primary.text}}>
          <p>Theme context</p>
          <button onClick={handleSwitchContext}>Click Me</button>
        </div>
      )}
    </>
  )
}

export default Box