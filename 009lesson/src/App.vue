<template>
  <div class="container">
    <div class="card">
      <h2>{{ $i18n('app.title') }}</h2>
      <h2>How work plugins in vue</h2>
      <button class="btn" @click="$alert('it is work')">alert</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
