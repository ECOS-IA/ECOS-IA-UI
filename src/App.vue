<template>
  <div id="app">
    {{name}}
  </div>
</template>

<script>

import BaseButton from "./components/BaseButton";

export default {
  name: 'App',
  components: { BaseButton },
  data: () => {
    name: "test"
  },
  methods: {
    test: () => {
      console.log("f")
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
