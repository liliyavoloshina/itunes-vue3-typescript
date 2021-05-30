<template>
  <div class="item">
    <div class="image">
      <img :src="item.artworkUrl100">
    </div>
    <div class="info">
      <div class="artist-name"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, computed} from 'vue'
import {Song} from '../types/response'

export default defineComponent({
  name: 'SearchSong',
  props: {
    item: {
      type: Object as PropType<Song>,
      required: true
    }
  },
  setup(props) {
    // const kind = computed(()=> props.item. ? 'song' )
  }
})
</script>

<style lang="scss" scoped>
.item {
  width: 90%;
  @include glass-card;
}
</style>
