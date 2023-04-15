import { useState } from 'react'
import { useRouter } from 'next/navigation'
import FirstComponent from '../components/firstcomponent'
import SecondComponent from '../components/secondcomponent'
import ThirdComponent from '../components/thirdcomponent'

const PageProps = () => {

  const router = useRouter()

  const [click, setClick] = useState<boolean>(false)
  const [initVal, setInitVal] = useState<string>("Enter something new...")
  const [arrayTodo, setArrayTodo] = useState<string[]>([])

  const handleClick = () => {
    setClick(!click)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInitVal(event.target.value)
  }

  const handleInputBtn = () => {
    setArrayTodo(initVal)
    setInitVal("")
  }

  const handleReturn = () => {
    router.push('/')
  }

  return (
    <div>

      <button
        type="button"
        onClick={handleReturn}
        className="m-4 px-4 py-2 text-green-400 hover:text-orange-400 
          border border-green-400 hover:border-orange-400 rounded-lg">
        Back to Home
      </button>

      <h2 className="mb-10 flex justify-center text-2xl">
        Components with props & events
      </h2>

      <p className="text-center">Reusable Components - & types with events</p>

      <div className="w-1/3 m-auto p-4 text-orange-400">
        <p>Look at :</p>
        <li>/types/types.propsvalues.ts</li>
        <li>/pages/pageprops.tsx</li>
        <li>/components/firstcomponent.tsx</li>
        <li>/components/secondcomponent.tsx</li>
        <li>/components/thirdcomponent.tsx</li>
      </div>

      <hr className="mt-10 mb-10"/>

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