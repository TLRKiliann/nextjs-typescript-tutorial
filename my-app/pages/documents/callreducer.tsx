import React, {useState} from 'react'
import { useRouter } from 'next/navigation'
import Counter from '../../components/Counter'

const CallReducer = () => {
  const [switchCall, setSwitchCall] = useState<boolean>(false)

  const router = useRouter()

  const handleChange = () => {
    setSwitchCall(!switchCall)
  }

  const handleReturn = () => {
    router.push('/')
  }

  return (
    <>
      <div>
        {switchCall === true ? (
          <Counter />
        ) : (
          null
        )}
        <div className="py-7 flex justify-center">
          <button 
            onClick={handleChange}
            className="px-10 py-5 bg-slate-600 border rounded-lg"
          >
            {switchCall ? 'hide useReducer' : 'show useReducer' }
          </button>
          <button
            onClick={handleReturn}
            className="px-10 py-5 text-orange-400 bg-slate-600 border rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    </>
  )
}
export default CallReducer