import { useState, useEffect } from 'react'
import FirstComponent from './stateprops/firstcomponent'
import SecondComponent from './stateprops/secondcomponent'
import ThirdComponent from './stateprops/thirdcomponent'

export default function Home() {

  const [click, setClick] = useState<boolean>(false)
  const [initVal, setInitVal] = useState<string>("Enter something new...")
  const [arrayTodo, setArrayTodo] = useState<string[]>([])

  const handleClick = () => {
    setClick(!click)
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInitVal(event.target.value)
  };

  const handleInputBtn = () => {
    setArrayTodo(initVal)
    setInitVal("")
  };

  return (
    <main className="text-center font-bold text-blue-400">
      <div>
        <h1 className="text-xl">TypeScript NextJS Tutorial</h1>
        <h2 className="m-4">Reusable Components</h2>

        <FirstComponent
          click={click}
          handleClick={handleClick}
        />

        <SecondComponent 
          initVal={initVal} 
          handleInputChange={handleInputChange} 
          handleInputBtn={handleInputBtn} 
          arrayTodo={arrayTodo}
        />

        <ThirdComponent 
          initVal={initVal} 
          handleInputChange={handleInputChange} 
          handleInputBtn={handleInputBtn} 
          arrayTodo={arrayTodo}
          click={click}
          handleClick={handleClick}
        />
      </div>
    </main>
  )
}
