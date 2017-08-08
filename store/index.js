import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    article: null,
    articles: []
  },

  mutations: {
    setArticle (state, data) {
      state.article = data
    },
    setArticles (state, data) {
      state.articles = state.articles.concat(data)
    }
  }
})

export default store
