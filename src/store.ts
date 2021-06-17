import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { itunesSearch } from './services/itunesApi'
import { Album, Artist, Song } from './types/response'
import { SearchParams } from './types/searchParams'

// export interface State<T> {
// 	searchResult: T
// 	searchResult: Song[] | Artist[] | Album[]
// }

export const key = Symbol()
// export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore({
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
