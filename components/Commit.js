import styles from '../styles/Commit.module.css'

export default function Commit({
  sha,
  authorName,
  authorEmail,
  date,
  message,
  commitUrl
}) {
  const parsedDate = new Date(date)

  return (
    <a href={commitUrl} rel='noreferrer' target='_blank'>
      <article className={styles.commit__container}>
        <div className={styles.container__title_container}>
          <h3>{sha}</h3>
          <span>{`${parsedDate.getDay()}/${parsedDate.getMonth()}/${parsedDate.getFullYear()} (${parsedDate.getHours()}:${
            parsedDate.getMinutes().toString().length === 1
              ? '0' + parsedDate.getMinutes()
              : parsedDate.getMinutes()
          })`}</span>
        </div>
        <h5>{`${authorName} (${authorEmail})`}</h5>
        <p>{message}</p>
      </article>
    </a>
  )
}
