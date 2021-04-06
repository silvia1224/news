// vuex状态管理
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	//数据源
	state: {
		historyLists: []
	},
	//改变数据源里面的数据
	mutations: {
		SET_HISTORY_LISTS(state,history) {
			state.historyLists = history
		}
	},
	//页面调用的是action里的方法
	actions: {
		set_history({commit,state},history) {
			let list = state.historyLists
			list.unshift(history)
			commit('SET_HISTORY_LISTS',list)//调用mutations中的方法
		}
	}
})

export default store