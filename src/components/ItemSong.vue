<template>
  <div class="item">
    <div class="image">
      <img :src="item.artworkUrl100">
    </div>
    <div class="info">
      <div class="artist-name"><span class="label">Artist name:</span> <a
          :href="item.artistViewUrl">{{item.artistName}}</a></div>
      <div class="track-name"><span class="label">Track name:</span> <a :href="item.trackViewUrl">{{item.trackName}}</a>
      </div>
      <div class="collection-name"><span class="label">Collection name:</span> <a
          :href="item.collectionViewUrl">{{item.collectionName}}</a></div>
      <div class="genre-name"><span class="label">Genre name:</span> {{item.primaryGenreName}}</div>
      <div class="release-date"><span class="label">Release date:</span> {{new Date(item.releaseDate).toDateString()}}
      </div>
    </div>
    <div class="audio">
      <audio controls preload="none">
        <source :src="item.previewUrl" type="audio/mp4" />
      </audio>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {Song} from '../types/response'

export default defineComponent({
  name: 'ItemsSong',
  props: {
    item: {
      type: Object as PropType<Song>,
      required: true
    }
  }
})
</script>
