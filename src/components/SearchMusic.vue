<template>
  <form @submit.prevent="search">
    <div class="search-inputs">
      <div class="search-input">
        <label for="term">Search term:</label>
        <input v-model="searchParam.term" id="term" type="text" placeholder="Blink182...">
      </div>
      <div class="search-input">
        <label for="entity">Search entity:</label>
        <select v-model="searchParam.entity" id="entity">
          <option value="musicArtist" selected>The artist name</option>
          <option value="album">The album's title</option>
          <option value="song">The track's title</option>
        </select>
      </div>
    </div>

    <button class="search-button">Search!</button>
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

<style lang="scss" scoped>

:root {
  --purple: rgb(131, 58, 180);
  --gradient: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
}
a {
  color: #42b983;
}

label {
  font-weight: bold;
  margin-bottom: 0.5em;
}

input,
select {
  padding: 0.5em;
  width: 100%;
}

.search-inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 20em;
  margin-bottom: 1em;

  width: 30rem;
  height: 20rem;
  @include glass;
}
.search-results {
  display: flex;
}
.search-button {
  width: 10em;
  padding: 0.5em;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
}
</style>
