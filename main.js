import Vue from 'vue'
import App from './App'
import Store from './store/store'
import HeaderNav from './components/header/header.vue'

import api from './util/index'

Vue.prototype.$store = Store

Vue.prototype.$api = api
Vue.config.productionTip = false

Vue.component('header-nav', HeaderNav)
App.mpType = 'app'

const app = new Vue({
	Store,
    ...App
})
app.$mount()