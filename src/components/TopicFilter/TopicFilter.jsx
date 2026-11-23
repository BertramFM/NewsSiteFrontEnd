
function TopicFilter({selectedTopic, onSelectTopic, topics}){
  const topicNames = ['all', ...topics.map(topic => topic.topicName)]

  return(
    <div>
      {topicNames.map(topic => (
        <button 
        key={topic}
        onClick={() => onSelectTopic(topic)}
        disabled={topic === selectedTopic}
        > {topic.charAt(0).toUpperCase() + topic.slice(1)} </button>
      ))}
    </div>
 )
}

export default TopicFilter