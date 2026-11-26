import { useState, useEffect } from 'react'
import '../App.css'
import ArticleList from '../components/ArticleList/ArticleList'
import TopicFilter from '../components/TopicFilter/TopicFilter'

function Articles(){
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [articles, setArticles] = useState([])
  const [topics, setTopics] = useState([])

  const fetchArticles = () => {
    fetch('http://localhost:7070/api/articles')
    .then(response => {
      if (!response.ok) { throw new Error(`Server responded with ${response.status}`)} 
      return response.json()
      })
    .then(data => {
      if (Array.isArray(data)) { setArticles(data) }
    })
    .catch(error => console.error('Error fetching articles:', error))
  }
  const fetchTopics = () => {
    fetch('http://localhost:7070/api/topics')
    .then(response => {
      if (!response.ok) { throw new Error(`Server responded with ${response.status}`)} 
      return response.json()
      })
    .then(data => {
      if (Array.isArray(data)) { setTopics(data) }
    })
    .catch(error => console.error('Error fetching topics:', error))
  }

  useEffect(() => {
    fetchArticles()
    fetchTopics()
  }, [])
  
  const visibleArticles = selectedTopic === 'all'
  ? articles
  : articles.filter(article => article.topicName === selectedTopic);
  
  
  return (
    <div>
      <h1>News Aggregator+</h1>
      <TopicFilter selectedTopic={selectedTopic} onSelectTopic={setSelectedTopic} topics={topics}/>
      <ArticleList articles={visibleArticles}/>
    </div>
  )
}

export default Articles;