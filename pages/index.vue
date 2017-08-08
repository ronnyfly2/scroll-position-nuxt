<template>
  <section>
    <article v-for="article in articles" :key="article.id">
      <nuxt-link :to="`/${article.slug}`">
        <h2 v-html="article.title.rendered"></h2>
        <div class="excerpt" v-html="article.excerpt.rendered"></div>
      </nuxt-link>
    </article>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  fetch ({ store }) {
    if (!store.state.articles.length) {
      return axios.get('https://wp.kmr.io/wp-json/wp/v2/posts?orderby=date&per_page=20&_embed')
        .then(response => {
          store.commit('setArticles', response.data)
        })
    }
  },

  computed: {
    articles () { return this.$store.state.articles }
  }
}
</script>

<style>
section {
  margin: 0 auto;
  max-width: 500px;
}

article a {
  background-color: #eee;
  color: #222;
  display: block;
  margin-top: 32px;
  padding: 16px;
  text-decoration: none;
}
</style>
