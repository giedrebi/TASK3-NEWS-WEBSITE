<template>
  <div>
    <button @click="getHealth">Health</button>
    <button @click="getBusiness">Business</button>
    <button @click="getSport">Sport</button>
    <button @click="getGeneral">General</button>
    <button @click="getEntertainment">Entertainment</button>
    <button @click="getScience">Science</button>
    <button @click="getTechnology">Technology</button>
    <div class="container">
      <div class="container-item" v-for="article of articles">
        <img :src="article.urlToImage" :alt="article.title">
        <a class="article-title" :href="article.url" target="_blank">{{ article.title }}</a>
        <p class="article-description">{{ article.description }}</p>
        <time-ago tooltip locale="zh_TW" :datetime="article.publishedAt"></time-ago>
        <p class="article-author">{{ article.author }}</p>

      </div>
    </div>
  </div>
</template>
<script >
import { TimeAgo } from 'vue2-timeago'
export default {
  components: {
    TimeAgo,
  },
  data() {
    return {
      articles: [],
      selectedArticles: "All",

    }
  },
  async fetch() {
    this.articles = await fetch('http://localhost:3004/articles'
    )
      .then(res => res.json())
      .catch(error => console.log('Error while fetching:', error))
  },

  methods: {

    getHealth: function () {
      fetch('http://localhost:3004/articles?category=health'
      )
        .then(res => res.json())
        .then(data => this.articles = data)
        .catch(error => console.log('Error while fetching:', error))
    },
    getBusiness: function () {
      fetch('http://localhost:3004/articles?category=business'
      )
        .then(res => res.json())
        .then(data => this.articles = data)
        .catch(error => console.log('Error while fetching:', error))
    },
    getSport: function () {
      fetch('http://localhost:3004/articles?category=sport'
      )
        .then(res => res.json())
        .then(data => this.articles = data)
        .catch(error => console.log('Error while fetching:', error))
    },
    getGeneral: function () {
      fetch('http://localhost:3004/articles?category=general'
      )
        .then(res => res.json())
        .then(data => this.articles = data)
        .catch(error => console.log('Error while fetching:', error))
    },
    getEntertainment: function () {
      fetch('http://localhost:3004/articles?category=entertainment'
      )
        .then(res => res.json())
        .then(data => this.articles = data)
        .catch(error => console.log('Error while fetching:', error))
    },
    getScience: function () {
      fetch('http://localhost:3004/articles?category=science'
      )
        .then(res => res.json())
        .then(data => this.articles = data)
        .catch(error => console.log('Error while fetching:', error))
    },
    getTechnology: function () {
      fetch('http://localhost:3004/articles?category=technology'
      )
        .then(res => res.json())
        .then(data => this.articles = data)
        .catch(error => console.log('Error while fetching:', error))
    },
  },

  fetchOnServer: false,

}
</script>

