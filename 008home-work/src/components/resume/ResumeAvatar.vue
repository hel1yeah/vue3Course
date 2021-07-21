<template>
  <div class="avatar">
    <img :src="body" :alt="body" />
  </div>
</template>

<script>
export default {
  props: ['body'],
  name: 'ResumeAvatar',
}
</script>

<style lang="scss" scoped>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>
