<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
    </div>

    <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
    >
    </app-news>
  </div>
</template>

<script>
import AppNews from "@/components/AppNews.vue";

export default {
  name: "App",
  components: {
    AppNews,
  },
  data() {
    return {
      now: new Date().toLocaleDateString(),
      news: [
        { title: "Первая новость", id: 1, isOpen: false },
        { title: "вторая новость", id: 2, isOpen: false },
        { title: "третяя новость", id: 3, isOpen: false },
      ],
    };
  },
};
</script>

<style></style>
