<template>
  <div class="item">
    <div class="image">
      <img :src="item.artworkUrl100">
    </div>
    <div class="info">
      <div class="artist-name"><span class="label">Artist name:</span> <a
          :href="item.artistViewUrl">{{item.artistName}}</a></div>
      <div class="collection-name"><span class="label">Collection name:</span> <a
          :href="item.collectionViewUrl">{{item.collectionName}}</a></div>
      <div class="genre-name"><span class="label">Genre name:</span> {{item.primaryGenreName}}</div>
      <div class="release-date"><span class="label">Release date:</span> {{new Date(item.releaseDate).toDateString()}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {Album} from '../types/response'

export default defineComponent({
  name: 'SearchAlbum',
  props: {
    item: {
      type: Object as PropType<Album>,
      required: true
    }
  }
})
</script>