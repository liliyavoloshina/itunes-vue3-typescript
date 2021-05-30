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
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

::selection {
  background: #e73c7e;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
