import Image from 'next/image'

const HeightComponent = () => {
  return (
    <>
      <div className="m-4 flex justify-start">
        <Image src="/../public/img/box.png" width="800" height="400" alt="img box" />
        <p>Box.tsx use the context that is created into file ThemeContext.
          This component defined the color of theme. For this present app, 
          we have only blue bundary at the top. Colors are defined in theme.ts file.
        </p>
      </div>

      <div className="m-4 flex justify-end">
        <p>theme.ts is a file with colors defined</p>
        <Image src="/../public/img/theme.png" width="400" height="400" alt="img theme" />
      </div>

      <div className="m-4 flex justify-start">
        <Image src="/../public/img/themecontext.png" width="800" height="400" alt="img themecontext" />
      </div>

      <div className="m-4 flex justify-end">
        <Image src="/../public/img/app.png" width="800" height="400" alt="img app" />
      </div>
    </>
  )
}
export default HeightComponent


