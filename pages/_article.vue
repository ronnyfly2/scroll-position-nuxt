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
  async asyncData ({ store, params }) {
    let articles = await axios.get(`https://wp.kmr.io/wp-json/wp/v2/posts?slug=${params.article}&_embed`)
    store.commit('setArticle', articles.data[0])
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
