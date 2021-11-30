import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineProfile
} from 'react-icons/ai'

export default function Footer() {
  return (
    <div>
      <div>
        <a
          aria-label='Send email to the author'
          href='mailto:cristianblar12@icloud.com'
          target='_blank'
          rel='noreferrer'
        >
          <AiOutlineMail title='email' />
        </a>
        <a
          aria-label='GitHub Profile'
          rel='noreferrer external'
          href='https://github.com/cristianblar'
          target='_blank'
        >
          <AiOutlineGithub title='GitHub' />
        </a>
        <a
          aria-label='LinkedIn profile'
          rel='noreferrer external'
          href='https://www.linkedin.com/in/cristianblandon/'
          target='_blank'
        >
          <AiOutlineLinkedin title='LinkedIn' />
        </a>
        <a
          aria-label='Portfolio'
          rel='noreferrer'
          href='https://www.cristianblar.dev'
          target='_blank'
        >
          <AiOutlineProfile title='Portfolio' />
        </a>
      </div>
    </div>
  )
}
