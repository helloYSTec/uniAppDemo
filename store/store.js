import Vue from 'vue'
import Vuex from 'vuex'
import ApiPath from '../util/apiPath.js'
Vue.use(Vuex)
const state = {
	requsetUrl: ApiPath.baseURL, //api请求地址
	expenseData: '', // 财务报销数据
};
const getters = {
	getExpenseData(state) {
    if (!state.expenseData) {
      state.expenseData = sessionStorage.getItem('expenseData')
    }
    return state.expenseData
  },
};
const mutations = {
	changeRequestUrl(state,url){
		state.requsetUrl = url
	},
	changeExpenseData(state,data){
		state.expenseData = data
		sessionStorage.setItem('expenseData', data);
	}
};
export default new Vuex.Store({
    state,
	getters,
	mutations
});