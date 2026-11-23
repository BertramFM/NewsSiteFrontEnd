import ArticleCard from "../ArticleCard/ArticleCard";

function ArticleList({articles}){
  return (
    <div className="article-list">
      {articles.map((article) => (
            <ArticleCard key={article.id}
            title={article.title}
            snippet={article.snippet}
            topicName={article.topicName}
            publishedAt={article.publishedAt}
            />
      ))}
    </div>
  );
}

export default ArticleList