<template>
  <form @submit.prevent="search">
    <div class="search-inputs">
      <div class="search-input"><label for="term">Search term:</label>
        <input v-model="searchParam.term" id="term" type="text">
      </div>
      <div class="search-input"><label for="entity">Search entity:</label>
        <select v-model="searchParam.entity" id="entity">
          <option value="musicArtist" selected>The artist name</option>
          <option value="album">The album's title</option>
          <option value="song">The track's title</option>
        </select>
      </div>
    </div>

    <button>Search!</button>
  </form>

  <div v-if="loading">Loading...</div>
  <div v-else-if="searchResult.length > 0" class="search-results">
    <caption>Search results: </caption>
    <search-item v-for="item in searchResult" :key="item.artistId" :item="item">
    </search-item>
  </div>

  <div v-else>Start searching something!</div>
</template>

<script lang="ts">
import {ref, defineComponent, computed} from 'vue'
import {useStore} from 'vuex'
import {key} from '../store'
import SearchParam from '../types/searchParam'
import SearchItem from './SearchItem.vue'
export default defineComponent({
  components: {SearchItem},
  name: 'SearchMusic',
  setup: () => {
    const searchParam = ref<SearchParam>({
      term: '',
      entity: 'musicArtist'
    })
    const loading = ref(false)
    const store = useStore(key)
    const search = async () => {
      loading.value = true
      await store.dispatch('search', searchParam.value)
      loading.value = false
    }
    const searchResult = computed(() => store.state.searchResult)

    return {searchResult, search, searchParam, loading}
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
.search-inputs {
  display: flex;
}

.search-results {
  display: flex;
}
</style>
