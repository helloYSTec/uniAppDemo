import ApiPath from './apiPath'
import Api from './api'

const Root = ApiPath.baseUrl + ApiPath.baseApiName

export default {
  post: function (url, data) {
    Api.post(Root ,data)
  },
  get: function (url, data) {
    Api.post(Root ,data)
  },
}