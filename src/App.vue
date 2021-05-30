<template>
  <SearchMusic />
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import SearchMusic from './components/SearchMusic.vue'

export default defineComponent({
  name: 'App',
  components: {
    SearchMusic
  }
})
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(
    11.76deg,
    #4158d0 0.41%,
    rgba(200, 80, 192, 0.796654) 50.98%,
    rgba(255, 204, 112, 0.595833) 100%
  );
  background-attachment: fixed; 
}
</style>
