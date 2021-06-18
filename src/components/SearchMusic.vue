<template>
  <form @submit.prevent="search" class="search-form">
    <div class="search-input">
      <input v-model="searchParams.term" id="term" type="text" placeholder="All Star..." class="search">
    </div>
    <div class="search-input">
      <select v-model="searchParams.entity" name="entity" id="entity">
        <option value="musicTrack">Song</option>
        <option value="musicArtist">Artist</option>
        <option value="album">Album</option>
      </select>
    </div>

    <button class="search-button">Search!</button>
  </form>

  <div v-if="loading" class="note">Loading...</div>

  <div v-else-if="searchResult.length > 0" class="search-results">
    <item-wrapper v-for="item in searchResult" :key="item.artistId">
      <item-song v-if="item.wrapperType === 'track'" :item="item" />
      <item-artist v-if="item.wrapperType === 'artist'" :item="item" />
      <item-album v-if="item.wrapperType === 'collection'" :item="item" />
    </item-wrapper>
  </div>

  <div v-else class="note">find your favorite song/artist/album!</div>
</template>

<script lang="ts">
import {ref, defineComponent, computed} from 'vue'
import {store} from '../store'
import {SearchParams} from '../types/searchParams'
import ItemSong from './ItemSong.vue'
import ItemArtist from './ItemArtist.vue'
import ItemAlbum from './ItemAlbum.vue'
import ItemWrapper from './ItemWrapper.vue'
export default defineComponent({
  name: 'SearchMusic',
  components: {ItemSong, ItemArtist, ItemAlbum, ItemWrapper},
  setup: () => {
    const searchParams = ref<SearchParams>({
      term: '',
      entity: 'musicTrack'
    })

    const loading = ref(false)

    const search = async () => {
      loading.value = true
      await store.dispatch('search', searchParams.value)
      loading.value = false
    }

    const searchResult = computed(() => store.state.searchResult)

    return {searchResult, search, searchParams, loading}
  }
})
</script>

<style lang="scss" scoped>
label {
  font-weight: bold;
  margin-bottom: 0.5em;
}

input {
  @include glass-input;
  cursor: pointer;
}
select {
  @include glass-input;
  margin-top: 0;
  cursor: pointer;
  option {
    color: grey;
  }
}

.search-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  margin-bottom: 1em;

  @media (max-width: 480px) {
    width: 90%;
  }
}
.search-results {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 2em;
}
.search-button {
  padding: 0.5em 1em;
  border: 0;
  border-radius: 0.5em;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2em;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
}

.note {
  width: 100%;
  padding: 2em;
  text-align: center;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
}
</style>
