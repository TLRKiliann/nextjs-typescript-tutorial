import Link from 'next/link'

const EventStyleGeneric = () => {
  return (
    <>
      <h1>Props - Event - Style - Generic</h1>
      <li>
        <Link href="/pageprops">
          Props
        </Link>
      </li>
      <li>
        <Link href="/pageprops">
          Event
        </Link>
      </li>
      <li>
        <Link href="/styleprops">
          Style
        </Link>
      </li>
      <li>
        <Link href="/">
          Generic
        </Link>
      </li>
    </>
  )
}

export default EventStyleGeneric