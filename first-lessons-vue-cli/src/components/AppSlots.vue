<template>
  <div class="container pt-1">
    <div class="card">
      <h2>
        <code> Изучаем слот: {{ ' <slot /> ' }} </code>
      </h2>
      <app-list>
        <template #default="{ inx, iter}">
          <strong >{{inx}}</strong>
          <span style="color: #c25205">item slot props : {{ iter }}</span>
        </template>
      </app-list>

      <app-block>
        <p>текст для блока slot</p>
        <template #header
          ><h3>Ебать вас в рот єто заголовк header</h3>
        </template>
        <template #footer
          ><h3>Ебать вас в рот єто заголовjr footer</h3>
        </template>
      </app-block>
    </div>
  </div>
</template>

<script>
import AppBlock from "@/components/AppBlock.vue";
import AppList from "@/components/AppList.vue";
export default {
  components: { AppBlock, AppList },
};
</script>

<style>
h2 {
  color: red;
}
</style>
