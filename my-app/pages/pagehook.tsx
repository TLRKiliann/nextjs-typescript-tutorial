import Link from 'next/link'
import { useRouter } from 'next/navigation'

const PageHook = () => {

  const router = useRouter()

  const handleReturn = () => {
    router.push('/')
  }

  const handleContext = () => {
    router.push('/pagecontext')
  }

  return (
    <>
      <div className="flex">
        <div>
          <h1 className="m-4 text-2xl">Page of Hooks</h1>
        </div>
        <div className="flex">
          <button
            type="button"
            onClick={handleReturn}
            className="p-2 m-auto text-slate-300 hover:text-orange-300 
              bg-slate-600 border border-slate-300 rounded-lg hover:border-orange-400"
          >
            Return back
          </button>
        </div>
      </div>

      <div className="m-4">

        <li className="m-2 text-xl hover:text-orange-400">
          <Link href="/documents/usestatecomponent">useState</Link>
        </li>

        <li className="m-2 text-xl hover:text-orange-400">
          <Link href="/documents/sevencomponent">useReducer</Link>
        </li>

        <li className="m-2 text-xl hover:text-orange-400">
          <Link href="/documents/callreducer">useReducer (interface)</Link>
        </li>


        <li className="m-2 text-xl hover:text-orange-400">
          <Link href="/documents/heightcomponent">useContext (code img)</Link>
        </li>

        <li className="m-2 text-xl hover:text-orange-400">
          <Link href="/documents/userefcomponent">useRef 1</Link>
        </li>

        <li className="m-2 text-xl hover:text-orange-400">
          <Link href="/documents/usereftimercomponent">useRef with timer</Link>
        </li>

        <li className="m-2 text-xl hover:text-orange-400">
          <button type="button" onClick={handleContext}>useContext (result)</button>
        </li>

      </div>
    </>
  )
}
export default PageHook