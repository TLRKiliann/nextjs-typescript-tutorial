import Link from 'next/link'
import { useRouter } from 'next/navigation'

const PageHook = () => {
  const router = useRouter()

  const handleReturn = () => {
    router.push('/')
  }

  return (
    <>
      <div className="flex">      
        <h1 className="m-4 text-2xl">Page of Hooks</h1>
        <button
          onClick={handleReturn}
          className="m-3 p-3 text-green-400 hover:text-orange-300 border border-green-400 rounded-lg hover:border-orange-400"
        >
          Return to main page
        </button>
      </div>

      <div className="m-4">
        <li className="m-2 text-xl hover:text-orange-400">
          <Link href="/documents/sevencomponent" >useReducer</Link>
        </li>
        <li className="m-2 text-xl hover:text-orange-400">
          <Link href="/documents/heightcomponent">useContext</Link>
        </li>

      </div>
    </>
  )
}
export default PageHook