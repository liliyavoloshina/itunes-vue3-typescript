import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { itunesSearch } from './services/itunesApi'
import { Song } from './types/response'

// define your typings for the store state
export interface State {
	searchResult: Array<Song>
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
	state: {
		searchResult: []
	},
	mutations: {
		search(state, searchResult) {
			state.searchResult = searchResult
		}
	},
	actions: {
		async search({ commit }, searchParam: string): Promise<void> {
			const data = await itunesSearch(searchParam)
			commit('search', data.results)
		}
	}
})
