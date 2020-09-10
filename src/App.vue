<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from "./components/header"

export default {
  components: {
    'app-header':header
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap");
body {
  margin: 0;
  font-family: "Nunito", sans-serif;
}

* {
  box-sizing: border-box;
}
</style>
