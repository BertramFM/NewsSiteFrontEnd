import { useState, useEffect } from 'react'
import './App.css'
import ArticleList from './components/ArticleList/ArticleList'
import TopicFilter from './components/TopicFilter/TopicFilter'


function App() {
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [articles, setArticles] = useState([])
  const [topics, setTopics] = useState([])

  useEffect(() => {
    fetch('http://localhost:7070/api/topics')
    .then(response => response.json())
    .then(data => setTopics(data))
    .catch(error => console.error('Error fetching topics:', error))
  }, [])

  useEffect(() => {
    fetch('http://localhost:7070/api/articles')
    .then(response => response.json())
    .then(data => setArticles(data))
    .catch(error => console.error('Error fetching articles:', error))
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

export default App
