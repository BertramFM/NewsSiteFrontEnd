# Component Tree
App
    --> Navbar                  State: selectedTopic, articles, topics
    --> TopicFilter             Props: selectedTopic, ononSelectTopic, topics
    --> ArticleList             Props: articles (topicFilter)
        --> ArticleCard         props: title, snippet, topicName, publishedAt
    --> ArticleDetail           (GET api/articles/{id}, kræver login)
    --> LoginForm
    --> RegisterForm
    --> SubscriptionPage        (GET/POST/DELETE api/subscriptions)
        --> SubscriptionForm    (POST api/subscriptions)
        --> SubscriptionList    (DELETE api/subscriptions)
    --> DigestList              (GET api/digests)
        --> DigestCard