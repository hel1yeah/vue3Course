<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <h2>Открыто {{ openRate }} ||| Прочитано {{ readRate }}</h2>
    </div>

    <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      :read-rate="readRate"
      :was-read="item.wasRead"
      @open-news="openNews"
      @read-new="readNew"
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
      openRate: 0,
      readRate: 0,
      now: new Date().toLocaleDateString(),
      news: [
        {
          title: "Первая новость",
          id: 1,
          isOpen: false,
          wasRead: false,
        },

        {
          title: "вторая новость",
          id: 2,
          isOpen: true,
          wasRead: false,
        },
        {
          title: "третяя новость",
          id: 3,
          isOpen: false,
          wasRead: false,
        },
      ],
    };
  },
  methods: {
    openNews() {
      this.openRate++;
    },
    readNew(id) {
      const index = this.news.findIndex((news) => news.id === id);
      this.news[index].wasRead = true;
      this.readRate++;
    },
  },
};
</script>

<style></style>
