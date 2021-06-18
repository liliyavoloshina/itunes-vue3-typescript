import { createStore, Store } from 'vuex'
import { itunesSearch } from './services/itunesApi'
import { Album, Artist, Song } from './types/response'
import { SearchParams } from './types/searchParams'

export interface State {
	searchResult: Song[] | Artist[] | Album[]
}

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
		async search({ commit }, searchParams: SearchParams): Promise<void> {
			const data = await itunesSearch(searchParams)
			commit('search', data)
		}
	}
})
