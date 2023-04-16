import { useRouter } from 'next/navigation'
import Image from 'next/image'

const HeightComponent = () => {

  const router = useRouter()

  const handleReturn = () => {
    router.push('/')
  }

  return (
    <>
      <div className="mt-10 flex justify-center">
        <div className="pl-60 w-full flex justify-end">
          <h1 className="text-3xl font-bold text-slate-300">
            useContext
          </h1>
        </div>
        <div className="pr-10 w-full m-auto flex justify-end">
          <button 
            type="button"
            onClick={handleReturn}
            className="p-2 text-slate-300 bg-slate-600 border border-slate-300 rounded-lg">
            Go back
          </button>
        </div>
      </div>

      <div className="m-10 flex justify-start rounded-lg">
        <Image
          src="/../public/img/box.png"
          width="800"
          height="432"
          alt="img box"
          className="rounded-l-lg"
        />
        <article className="px-6 py-4 text-justify text-slate-300 bg-slate-50/10 rounded-r-lg">
          <h2 className="font-serif text-3xl mb-3">
            Box.tsx
          </h2>
          <p className="px-6 py-4 bg-slate-50/10 rounded-lg">
            This component use context from ThemeContext file.&nbsp; 
            <span className="font-bold text-slate-400 bg-slate-50/10">"useContext()"</span>&nbsp;
            is imported from React module.
            This component could change the color of bundary at the top by clicking button.
            It's change for every page of this app. It's because _app.tsx use ThemeContextProvider
            from ThemeContext (where context has been created) for using theme.ts. 

          </p>
        </article>
      </div>

      <div className="m-10 flex justify-end rounded-lg">
        <article className="px-6 py-4 text-justify text-slate-300
          transition ease-in-out delay-300 bg-slate-50/10 rounded-l-lg">
          <h2 className="font-serif text-3xl mb-3">
            theme.ts
          </h2>
          <p className="px-6 py-4 bg-slate-50/10 rounded-lg">
            This file defined colors with parameters. There is no JSX so we call it by using ".ts".
            Box.tsx & ThemeContext.tsx use it.
          </p>
        </article>
        <Image 
          src="/../public/img/theme.png" 
          width="400"
          height="400"
          alt="img theme" 
          className="rounded-r-lg"
        />
      </div>

      <div className="m-10 flex justify-start rounded-lg">
        <Image
          src="/../public/img/themecontext.png"
          width="800"
          height="800"
          alt="img themecontext"
          className="rounded-l-lg"
        />
        <article className="px-6 py-4 text-justify text-slate-300 bg-slate-50/10 rounded-r-lg">
          <h2 className="font-serif text-3xl mb-3">
            ThemeContext.tsx
          </h2>
          <p className="px-6 py-4 bg-slate-50/10 rounded-lg">
            To define type of children, we need <span className="font-bold text-slate-400 bg-slate-50/10">
            "ReactNode"</span>.
            <br />
            Parameters from theme.ts are used to create context. Then, we pass theme to 
            createContext()". ThemeContextProvider function passes children and value (theme)
            to _app.tsx.
            <br />
            This effect can be achieved by making the provider accessible to all pages,
            by using <span className="font-bold text-slate-400 bg-slate-50/10">"ThemeContext" 
            with "Provider" => "ThemeContext.Provider"</span>.
            <br />
            Don't forget to export "const ThemeContext" & "const ThemeContextProvider" 
            with children. 
            <br />ThemeContext is reusable by "useContext() from Box.tsx (code above).
            <br />
          </p>
        </article>
      </div>

      <div className="m-10 flex justify-end rounded-lg">
        <article className="px-6 py-4 text-justify text-slate-300 bg-slate-50/10 rounded-l-lg">
          <h2 className="font-serif text-3xl mb-3">
            _app.tsx
          </h2>
          <p className="px-6 py-4 bg-slate-50/10 rounded-lg">
            Into _app.tsx file, we need to tackle all components with 
            ThemeContextProvider (from file ThemeContext.tsx).
          </p>
        </article>
        <Image
          src="/../public/img/app.png"
          width="800"
          height="800"
          alt="img app"
          className="rounded-r-lg"
        />
      </div>
    </>
  )
}
export default HeightComponent


