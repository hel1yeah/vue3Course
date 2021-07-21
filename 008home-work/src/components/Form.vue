<template>
  <form class="card card-w30" @submit.prevent="postForm">
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="title">
        <option value="Title">Заголовок</option>
        <option value="Subtitle">Подзаголовок</option>
        <option value="Avatar">Аватар</option>
        <option value="Descr">Текст</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea id="value" rows="3" v-model.trim="descr"></textarea>
    </div>

    <button class="btn primary" :disabled="isValidDescr">Добавить</button>
  </form>
</template>

<script>
export default {
  // emits: ['addForm'],
  emits: {
    addForm:{
      type: Object,
      validator: function(obj){
        if (obj.length > 1) {
          return true
        }  return false
      }
    }
  },
  name: 'Form',
  data() {
    return {
      title: 'Title',
      descr: '',
    }
  },
  methods: {
    postForm() {
      this.$emit('addForm', {
        title: this.title,
        descr: this.descr,
        id: Date.now(),
      })
      this.title = 'Title'
      this.descr = ''
    },
  },

  computed: {
    isValidDescr() {
      return this.descr.length <= 3
    },
  },
}
</script>

<style lang="scss" scoped></style>
