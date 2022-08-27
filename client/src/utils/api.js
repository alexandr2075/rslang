const Api = {
  baseUrl: 'https://learnwords-rs-school.herokuapp.com',
  endpoints: {
    words: 'words',
    users: 'users',
    signin: 'signin',
    settings: 'settings',
    statistics: 'statistics',
    aggrgateWords: 'aggrgateWords',
    tokens: 'tokens',
  },
  queries: {
    words: {
      page: 'page',
      group: 'group',
      woprdsPerExampleSentenceLTE: 'woprdsPerExampleSentenceLTE',
      wordsPerPage: 'wordsPerPage',
      count: 'count',
      filter: 'filter',
    },
  },
}

console.log(Api.endpoints.words)

