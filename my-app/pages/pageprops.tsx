import { useState } from 'react'
import FirstComponent from '../components/firstcomponent'
import SecondComponent from '../components/secondcomponent'
import ThirdComponent from '../components/thirdcomponent'

const PageProps = () => {

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
    <div>

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
  )
}
export default PageProps