import Image from 'next/image'

const PageContext = () => {
  return (
    <>
      <h1>Look at _app.tsx</h1>
      <div className="flex justify-center">
        <Image src="/../public/img/box.png" width="200" height="100" alt="img box" />
      </div>

      <div className="flex justify-center">
        <Image src="/../public/img/theme.png" width="200" height="100" alt="img theme" />
      </div>

      <div className="flex justify-center">
        <Image src="/../public/img/themecontext.png" width="200" height="100" alt="img themecontext" />
      </div>

      <div className="flex justify-center">
        <Image src="/../public/img/app.png" width="200" height="100" alt="img app" />
      </div>
    </>
  )
}

export default PageContext