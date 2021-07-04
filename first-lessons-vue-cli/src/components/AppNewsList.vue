<template>
  <h4>{{ title }}</h4>
  <hr />
  <ul>
    <li v-for="item in news" :key="item">
      {{ item.title }}<span v-if="item.wasRead">!!!!!!</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  inject: ["title", "news"],
};
</script>

<style lang="scss" scoped></style>
