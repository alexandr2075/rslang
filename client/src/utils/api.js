const Api = {
  baseUrl: 'https://learnwords-rs-school.herokuapp.com',
  endpoints: {
<<<<<<< HEAD
    words : 'words',
    users : 'users',
    signin : 'signin',
    settings : 'settings',
    statistics : 'statistics',
    aggrgateWords : 'aggrgateWords',
    tokens: 'tokens',
=======
    words: 'words',
    users: 'users',
    signin: 'signin',
    settings: 'settings',
    statistics: 'statistics',
    aggrgateWords: 'aggrgateWords',
>>>>>>> d30279d (feat: add auth)
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
};

export default Api;
