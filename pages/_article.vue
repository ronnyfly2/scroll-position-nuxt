<template>
  <section>
    <article class="single-article">
      <h1 class="title" v-html="article.title.rendered"></h1>
      <div class="content" v-html="article.content.rendered"></div>
    </article>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  fetch ({ store, params }) {
    return axios.get(`https://wp.kmr.io/wp-json/wp/v2/posts?slug=${params.article}&_embed`)
      .then(response => {
        store.commit('setArticle', response.data[0])
      })
  },

  computed: {
    article () { return this.$store.state.article }
  }
}
</script>

<style>
section {
  margin: 0 auto;
  max-width: 500px;
}
</style>
