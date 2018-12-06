import ApiPath from './apiPath'
import Api from './api'
import Store from '../store/store'
const Root = Store.state.requsetUrl + ApiPath.baseApiName

export default {
  post: function (data) {
    Api.post(Root ,data)
  },
  get: function (data) {
    Api.post(Root ,data)
  },
}