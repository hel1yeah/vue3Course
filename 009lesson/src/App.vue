<template>
  <div class="container">
    <div class="card">
      <h2 v-color:[type]="myColor">Talk with derective</h2>
      <div class="form-control">
        <label>
          active default
          <input type="text" v-focus />
        </label>
      </div>
      <button class="btn" @click="myColor = 'blue'">make blue</button>
      <button
        class="btn"
        @click="type = type === 'color' ? 'backgroundColor' : 'color'"
      >
        make blue
      </button>
      {{ type }}
    </div>
  </div>
</template>

<script>
import focusDirective from './components/focusDirective';
import colorDirective from './components/colorDirective';

export default {
  directives: {
    focus: focusDirective,
    color: colorDirective,
  },
  data() {
    return {
      myColor: 'red',
      type: 'color',
    };
  },
};
</script>
