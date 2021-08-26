<template>
  <div>
    <div class="container column">
      <Form @addForm="addForm" />
      <Card :posts="posts" />
    </div>
    <div class="container">
      <ButtonDownloadComments @click="getCommets" />
      <Loader v-if="loading" />
      <Comments v-else :isComments="comments"></Comments>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import Card from '@/components/Card.vue'
import Loader from '@/components/Loader.vue'
import ButtonDownloadComments from '@/components/ButtonDownloadComments.vue'
import Comments from '@/components/Comments.vue'

import axios from 'axios'

export default {
  components: {
    Form,
    Card,
    Loader,
    ButtonDownloadComments,
    Comments,
  },
  data() {
    return {
      loading: false,
      comments: [],
      posts: [],
    }
  },
  methods: {
    addForm(post) {
      console.log(this.posts)
      this.posts.push(post)
    },
    getCommets() {
      return new Promise(() => {
        this.loading = true
        axios
          .get('https://jsonplaceholder.typicode.com/comments?_limit=12')
          .then((response) => {
            this.comments = response.data
            this.loading = false
          })
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
