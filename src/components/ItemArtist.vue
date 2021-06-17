<template>
  <div class="item">
    <div class="info">
      <div class="artist-name"><span class="label">Artist name:</span> <a
          :href="item.artistLinkUrl">{{item.artistName}}</a></div>
      <div class="artist-type"><span class="label">Artist type:</span> {{item.artistType}}</div>
      <div class="genre-name"><span class="label">Genre name:</span> {{item.primaryGenreName}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {Artist} from '../types/response'

export default defineComponent({
  name: 'SearchArtist',
  props: {
    item: {
      type: Object as PropType<Artist>,
      required: true
    }
  }
})
</script>