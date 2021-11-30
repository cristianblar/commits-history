export default function Commit({
  sha,
  authorName,
  authorEmail,
  date,
  message,
  commitUrl
}) {
  return (
    <article>
      <div>
        <h3>{sha}</h3>
        <span>{date}</span>
      </div>
      <h5>{`${authorName} (${authorEmail})`}</h5>
      <p>{message}</p>
    </article>
  )
}
