<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
    </div>
    
    <app-news></app-news>
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
      isOpen: false,
      news: ["Первая новость ", "2 новость ", "3 новость "],
    };
  },
};
</script>

<style></style>
