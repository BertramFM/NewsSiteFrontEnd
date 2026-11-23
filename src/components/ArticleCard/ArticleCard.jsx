import './ArticleCard.css'

function ArticleCard({title, snippet, topicName, publishedAt}){
  return (
    <article className='article-card'>
      <h2>{title}</h2>
      <p>{snippet}</p>
      <small>{topicName} | {publishedAt}</small>
    </article>
  );
}

export default ArticleCard