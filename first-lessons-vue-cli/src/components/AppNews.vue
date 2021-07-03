<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="open">
      {{ isNewsOpen ? "Закрыть" : "Открыть" }}
    </button>
    <div v-if="isNewsOpen">
      <p>
        Далеко-далеко за словесными горами, в стране гласных и согласных живут
        рыбные тексты. Маленький, вершину? Единственное грустный переписывается
        грамматики?
      </p>
      <button class="btn primary" v-if="!wasRead" :disabled="dis" @click.once="readNew">
        Прочёл новость
      </button>
    </div>
  </div>
</template>

<script>
export default {
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
  },
};
</script>
