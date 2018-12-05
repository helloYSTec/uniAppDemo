import Vue from 'vue'
import App from './App'
import apiPath from './unit/apiPath.js'
import api from './unit/api.js'
const api = api.getApp();
Vue.prototype.$apiPath = apiPath.realApi
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()