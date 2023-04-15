import { useRouter } from 'next/navigation'
import Link from 'next/link'
import PageProps from './pageprops'
//import PageHook from './pagehook'

export default function Home() {
  const router = useRouter()

  const handlePageHook = () => {
    router.push('/pagehook');
  }
  return (
    <main>

      <h1 className="p-4 text-3xl font-serif text-blue-400 bg-blue-900">
        TypeScript NextJS Tutorial
      </h1>
      
      <ul className="m-10">
        <li>
          <Link 
            href="/pageprops" 
            className="p-2 font-bold text-yellow-400 
              border border-green-400 rounded hover:text-slate-100"
          >
            Page Props
          </Link>
        </li>
        <li>
          <button 
            onClick={handlePageHook} 
            className="mt-10 p-2 font-bold text-yellow-400 
              border border-green-400 rounded hover:text-slate-100"
          >
            Page Hook<
          /button>
        </li>
      </ul>
      
    </main>
  )
}
