import { useRouter } from 'next/navigation'
import Link from 'next/link'
import PageProps from './pageprops'

export default function Home() {
  const router = useRouter()

  const handlePageHook = () => {
    router.push('/pagehook');
  }
  return (
    <main>
      <div className="p-4 bg-slate-800 shadow shadow-slate-50/20">
        <h1 className="text-3xl font-serif text-blue-400">
          TypeScript NextJS Tutorial
        </h1>
        <h3 className="p-1">
          (look at the README.md page)
        </h3>
      </div>

      <ul className="m-20">
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
