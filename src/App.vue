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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  width: 100%;
  height: 100%;
  margin: 0;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab) fixed;
  font-family: 'Lato', sans-serif;
}

body::-webkit-scrollbar {
  width: 1em;
  background-color: transparent;
}
 
body::-webkit-scrollbar-thumb {
  background-color: #e73c7e;
  outline: none;
  border-radius: .5em;
}

::selection {
  background: #e73c7e;
}
</style>
