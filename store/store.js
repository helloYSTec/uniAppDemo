import Vue from 'vue'
import Vuex from 'vuex'
import ApiPath from '../util/apiPath.js'
Vue.use(Vuex)
const state = {
	requsetUrl: ApiPath.baseURL
};
const mutations = {
	changeRequestUrl(state,url){
		state.requsetUrl = url
	}
};
export default new Vuex.Store({
    state,
	mutations
});