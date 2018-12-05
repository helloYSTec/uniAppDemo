export default {
  // 真实地址
  realApi: {
    // baseURL: 'http://192.168.10.110:8010',
    // baseURL: 'http://60.191.61.27:8010',
    baseURL: 'http://183.129.232.100:8010/MobileServicePlatform/Handler/handler_ajax.ashx',//正式环境
    // baseURL: 'http://192.168.10.123:8010',//小平的
    // baseURL: 'http://cloud.eshangtech.com:6060',
    url: '/MobileServicePlatform/Handler/handler_ajax.ashx'
  },
  // 测试地址
  testApi: {
    baseURL: 'http://192.168.10.110:8010',
    url: '/MobileServicePlatform/Handler/handler_ajax.ashx',
    apiName: {
      name1: ''
    }
  },
}