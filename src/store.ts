import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { itunesSearch } from './services/itunesApi'
import { ResponseResult } from './types/response'
import SearchParam from './types/searchParam'

// define your typings for the store state
export interface State {
	searchResult: Array<ResponseResult>
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
		async search({ commit }, searchParam: SearchParam): Promise<void> {
			const data = await itunesSearch(searchParam)
			commit('search', data)
		}
	}
})
