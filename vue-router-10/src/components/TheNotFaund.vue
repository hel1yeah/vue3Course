<template>
  <div class="card no-padding">
    <h1>Page nor faund</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
      temporibus repellat error quibusdam, possimus officia accusamus quam et
      placeat nemo deserunt laborum aperiam omnis rerum atque incidunt! Iure,
      veritatis impedit. Quia consectetur, molestias nostrum corrupti, aliquam
      officiis eaque reprehenderit modi dolore maxime incidunt necessitatibus
      deleniti porro, error atque? Pariatur fugit ipsam architecto excepturi
      optio. Impedit at nesciunt beatae nulla! Fugit.
    </p>
    <router-link :to="{ name: 'login' }"
      ><button class="btn">To main</button></router-link
    >
  </div>
</template>

<script>
export default {
  name: 'TheNotFaund',
};
</script>

<style lang="scss" scoped></style>
