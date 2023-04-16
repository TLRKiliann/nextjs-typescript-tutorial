import Link from 'next/link'
import { useRouter } from 'next/navigation'

const EventStyleGeneric = () => {
  const router = useRouter()

  const handleReturn = () => {
    router.push('/')
  }
  return (
    <>
      <div className="flex">
        <div>
          <h1 className="m-4 text-2xl">Props - Event - Style - Generic</h1>
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
          <Link href="/pageprops">
            Props
          </Link>
        </li>
        <li className="m-2 text-xl hover:text-orange-400">
          <Link href="/pageprops">
            Event
          </Link>
        </li>
        <li className="m-2 text-xl hover:text-orange-400">
          <Link href="/styleprops">
            Style
          </Link>
        </li>
        <li className="m-2 text-xl hover:text-orange-400">
          <Link href="/">
            Generic
          </Link>
        </li>
      </div>
    </>
  )
}

export default EventStyleGeneric