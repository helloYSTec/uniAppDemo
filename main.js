import Vue from 'vue'
import App from './App'
import apiPath from './util/apiPath.js'
import api from './util/api.js'
Vue.prototype.$apiPath = apiPath.realApi
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()