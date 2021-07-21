<template>
  <div class="card card-w70">
    <component
      v-for="post in posts"
      :key="post.id"
      :is="'Resume-' + post.title"
      v-bind="{ body: post.descr }"
    >
    </component>
  </div>
</template>

<script>
import ResumeAvatar from './resume/ResumeAvatar.vue'
import ResumeTitle from '@/components/resume/ResumeTitle.vue'
import ResumeSubtitle from '@/components/resume/ResumeSubtitle.vue'
import ResumeDescr from '@/components/resume/ResumeDescr.vue'
export default {
  name: 'Card',
  props: ['posts'],
  components: {
    ResumeAvatar,
    ResumeTitle,
    ResumeSubtitle,
    ResumeDescr,
  },
}
</script>

<style lang="scss" scoped>

</style>
