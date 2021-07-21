<template>
  <div class="card" v-if="isComments.length !== 0">
    <h2>Комментарии</h2>
    <ul class="list">
      <li class="list-item" v-for="(comment, index) in isComments" :key="index">
        <div>
          <p>
            <strong>{{ comment.email }}</strong>
          </p>
          <small>
            {{ comment.body }}
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  props: ['isComments'],
}
</script>

<style lang="scss" scoped></style>
