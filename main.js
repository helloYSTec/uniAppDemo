import Vue from 'vue'
import App from './App'
import store from './store'

import apiPath from './unit/apiPath'
import api from './unit/api'


const api = api.getApp();

Vue.prototype.$store = store
Vue.prototype.$apiPath = apiPath.realApi

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()