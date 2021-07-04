<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <app-button @action="open">
      {{ isNewsOpen ? "Закрыть" : "Открыть" }}
    </app-button>
    <app-button classBtn="danger" v-if="wasRead" @action="unmark"
      >Отметить как не прочитаное
    </app-button>
    <div v-if="isNewsOpen">
      <p>
        Далеко-далеко за словесными горами, в стране гласных и согласных живут
        рыбные тексты. Маленький, вершину? Единственное грустный переписывается
        грамматики?
      </p>
      <app-button
        classBtn="primary"
        v-if="!wasRead"
        :disabled="dis"
        @action="readNew"
        >Прочёл новость
      </app-button>
      <app-news-list></app-news-list>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import AppNewsList from "@/components/AppNewsList.vue";
export default {
  components: {
    AppButton,
    AppNewsList,
  },
  props: {
    title: {
      required: true,
      type: String,
    },
    id: {
      type: Number,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
    readRate: {
      type: Number,
      required: true,
    },
    wasRead: {
      type: Boolean,
      required: true,
    },
    news: Array,
  },
  emits: {
    "open-news"(num) {
      if (num) {
        return true;
      }
      console.warn("no number");
      return false;
    },
    "read-new"(id) {
      if (id) {
        return true;
      }
      console.warn("no id");
      return false;
    },
    unmark(id) {
      if (id) {
        return true;
      }
      console.warn("no id");
      return false;
    },
  },
  data() {
    return {
      isNewsOpen: this.isOpen,
      dis: false,
    };
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen;
      if (this.isNewsOpen) {
        this.$emit("open-news", 42);
      }
    },
    readNew() {
      this.isNewsOpen = !this.isNewsOpen;
      this.$emit("read-new", this.id);
      this.dis = true;
    },
    unmark() {
      this.$emit("unmark", this.id);
    },
  },
};
</script>
