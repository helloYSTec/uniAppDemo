import ApiPath from './util/apiPath'
import Api from './util/api'

const Root = ApiPath.baseUrl + ApiPath.baseApiName

export default {
  
  post: function (url, data) {
    Api.post(Root ,data)
  },
  get: function (url, data) {
    Api.post(Root ,data)
  },
}