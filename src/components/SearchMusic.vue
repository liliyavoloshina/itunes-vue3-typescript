<template>
  <form @submit.prevent="search" class="search-form">
    <div class="search-input">
      <input v-model="term" id="term" type="text" placeholder="Blink182..."
        class="search">
    </div>

    <button class="search-button">Search!</button>
  </form>

  <div v-if="loading" class="note">Loading...</div>

  <div v-else-if="searchResult.length > 0" class="search-results">
    <search-item v-for="item in searchResult" :key="item.artistId" :item="item" />
  </div>

  <div v-else class="note">Start searching something!</div>
</template>

<script lang="ts">
import {ref, defineComponent, computed} from 'vue'
import {useStore} from 'vuex'
import {key} from '../store'
import SearchItem from './SearchItem.vue'
export default defineComponent({
  name: 'SearchMusic',
  components: {SearchItem},
  setup: () => {
    const term = ref('')
    const loading = ref(false)
    const store = useStore(key)
    const search = async () => {
      loading.value = true
      await store.dispatch('search', term.value)
      loading.value = false
    }
    const searchResult = computed(() => store.state.searchResult)

    return {searchResult, search, term, loading}
  }
})
</script>

<style lang="scss" scoped>
label {
  font-weight: bold;
  margin-bottom: 0.5em;
}

input {
  width: 100%;
  padding: .5em 1em;
	border: 0;
	text-decoration: none;
	border-radius: .5em;
	background-color: #0002;
	border: 1px solid rgba(255, 255, 255, 0.1);
	color: rgba(255, 255, 255, 0.8);
	font-size: 1.4em;
	outline: none;
	&:focus {
		background-color: rgba(255, 255, 255, 0.2);
	}
  &::placeholder {
    color: rgba(255, 255, 255, 0.342);
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
}
.search-button {
  padding: .5em 1em;
	border: 0;
	border-radius: .5em;
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
  color: rgba(255, 255, 255, 0.8);
}
</style>
