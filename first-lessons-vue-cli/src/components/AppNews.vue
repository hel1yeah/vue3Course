<template>
  <div class="card" >
    <h3>{{ item }}</h3>
    <p v-if="isOpen">
      Далеко-далеко за словесными горами, в стране гласных и согласных живут
      рыбные тексты. Маленький, вершину? Единственное грустный переписывается
      грамматики?
    </p>
    <button class="btn" @click="isOpen = !isOpen">посмотреть</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: "string",
      isOpen: false,
    };
  },
};
</script>
