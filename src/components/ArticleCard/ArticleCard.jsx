import './ArticleCard.css'

function ArticleCard({title, snippet, topicName, publishedAt}){
  const formatDate = new Date(publishedAt + "Z").toLocaleDateString("da-DK", {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const time = publishedAt.split("T")[1].slice(0,5);

  return (
    <article className='article-card'>
      <h2>{title}</h2>
      <p>{snippet}</p>
      <small>{topicName} | {formatDate} {time}</small>
    </article>
  );
}

export default ArticleCard