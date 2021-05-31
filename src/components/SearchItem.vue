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
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  padding: 1em;
  margin-top: 2em;
  @include glass-card;

  .image {
    border: 1px solid #fff;
    // flex: 1 1;
    height: 10em;

    img {
      height: 100%;
      object-fit: contain;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.1em;
    .label {
      font-weight: 700;
    }
    a {
      text-decoration: none;
      color: #e73c7e;

      &:hover {
        color: #23a6d5;
      }
    }
  }

  .audio {
    width: 100%;
    audio {
      width: 100%;
      outline: none;
    }
  }
}
</style>
