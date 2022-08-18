export const Api = {
  baseUrl: 'https://learnwords-rs-school.herokuapp.com',
  endpoints: {
    words : 'words',
    users : 'users',
    signin : 'signin',
    settings : 'settings',
    statistics : 'statistics',
    aggrgateWords : 'aggrgateWords',
  },
  queries: {
    words: {
      page : 'page',
      group : 'group',
      woprdsPerExampleSentenceLTE : 'woprdsPerExampleSentenceLTE',
      wordsPerPage : 'wordsPerPage',
      count : 'count',
      filter : 'filter',
    }
  },
}