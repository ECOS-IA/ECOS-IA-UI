<template>
  <div id="app">
    
  </div>
</template>

<script>

import BaseButton from "./components/BaseButton";
import AsyncButton from "./components/AsyncButton"

export default {
  name: 'App',
  components: { AsyncButton, BaseButton },

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
