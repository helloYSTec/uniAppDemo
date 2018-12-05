import Vue from 'vue'
import App from './App'
import store from './store/store'
import util from './common/util.js'
import api from './util/index'

Vue.prototype.$store = store
Vue.prototype.$util = util
Vue.prototype.$api = api
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()