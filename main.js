import Vue from 'vue'
import App from './App'
import Store from './store/store'
import HeaderNav from './components/header/header.vue'
import util from './common/util.js'
import api from './util/api'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)
Vue.prototype.$store = Store

Vue.prototype.$api = api
Vue.prototype.$util = util
Vue.config.productionTip = false

Vue.component('header-nav', HeaderNav)
App.mpType = 'app'

const app = new Vue({
	Store,
    ...App
})
app.$mount()