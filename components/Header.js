import Image from 'next/image'

export default function Header() {
  return (
    <div>
      <Image
        src='/happy_cris.png'
        alt='Happy Cris Memoji'
        width='200'
        height='200'
      />
      <h1>Commits history</h1>
    </div>
  )
}
