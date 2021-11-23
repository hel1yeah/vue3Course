<template>
  <div class="alert" :class="type" @click="$emit('closeAlert')">
    <p class="alert-title">{{ alertTitle }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga labore
      adipisci hic, nulla temporibus, distinctio ex nisi pariatur quisquam modi
      quos consequuntur, sunt dignissimos reiciendis rem esse asperiores autem
      ducimus. Dignissimos dolorem veniam itaque enim adipisci, deserunt nobis
      earum possimus atque accusantium voluptatibus tempora qui illo doloremque
      voluptates provident rem distinctio quisquam? Aperiam saepe minus commodi
      laboriosam? Eum, quam accusantium.
    </p>
  </div>
</template>

<script>
export default {
  emits: ['closeAlert'],
  props: ['alertTitle', 'type'],
};
</script>

<style lang="scss" scoped></style>
