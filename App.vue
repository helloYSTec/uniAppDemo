<script>
	
	export default {
		data () {
			return {
				appid: 'wx85e69a5fb601be16',
				weChatAppData: {}, // 公众号信息
				weChatUserData: {}, // 公众号用户信息
				uid: '',
				moduleAuthority: []
			}
		},
		methods: {
			getLocation () {
				let _this = this
				// _this.appid = _this.$route.query['appid']
				let wechatSignId = _this.$route.query['wechatSignId'] || _this.getlocationKeys('wechatSignId')
				// 如果存在 微信公众号的内码 ，则请求获取微信公众号信息
				if (wechatSignId) { 
					_this.getAppId()
				}
				
			},
			wechatLogin() { // 微信授权
				let _this = this
				let code = this.$route.query['code'] || _this.getlocationKeys('code')
				if (!code) {
					let local = location.href
					let postUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + _this.weChatAppData.WECHAT_APPID + '&redirect_uri=' + encodeURIComponent(local) + '&response_type=code&scope=snsapi_base&state=1#wechat_redirect'
				
				} else {
					uni.request({
						url: 'http://mall.eshangtech.com:8010',
						method: 'GET',
						data: {
							action_type: 'GetWechatInfo',
							RegisterType: 4,
							action_data: code
							
						},
						success: (res) => {
							let data = res.data.WechatInfoObject[0]
							_this.weChatUserData = {openid: data.WECHAT_OPENID, wxId:data.RTWECHATPUSH_ID}
						},
						fail: (res) => {
							console.log(res);
						}
						
					})
				}
			},
			getAppId() { // 通过微信内码获取appid
				let _this = this
				_this.$api.get({
					action_type: 'GetWechatInfoBySignId',
					wechatSignId: wechatSignId,
				}).then(res => {
					_this.weChatAppData = res.data.WeChatInfo
					_this.wechatLogin()
				})
			},
			logoinByWechat () { // 微信用户登录后台
				let _this = this
				_this.$api.get({
					action_type: 'Login',
					login_type: 4,
					cId: _this.weChatAppData.WECHAT_APPID,
					wechatSignId: wechatSignId,
					code: _this.getlocationKeys('code'),
					wechatSignId: _this.getlocationKeys('wechatSignId'),
				}).then(res => {
					let _data = res.data
					if (_data.ResultCode===100) {
						_this.uid = _data.WechatInfoObject.RTWECHATPUSH_ID
						_this.moduleAuthority = _data.ModuleAuthority
					}
				})
			},
			getlocationKeys(keys) {
				let searchKeys = location.search
				if (searchKeys) {
					let arr = searchKeys.replace(/\?/ig,'').split('&')
					let index = arr.indexOf(keys)
					if (index>-1 ) {
						let keyAndValue = arr[index].split('=')
						return keyAndValue[1]
					}
				}
			}
		},
		created () {
			console.log('登陆')
			this.getLocation()
		},
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import "./common/uni.css";
	@import "./common/ico.css";
	/*@import "./static/font/iconfont.css";*/
	/*每个页面公共css */
	* {
		box-sizing: border-box;	
	}
	ul {
		padding: 0;
		margin: 0;
	}
	li {
		list-style: none;
	}
	page {
		background-color: #f2f2f2;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
	}
	.page-body {
		margin-top: 90upx;
		padding-top: 20upx;
		background-color: #f2f2f2;
		color: #333;
	}
	.open-ico:before {
		content: "\E60A";
	}
	
/* 	* {
		box-sizing: border-box;
		
	}
	ul {
		padding: 0;
		margin: 0;
	}
	li {
		list-style: none;
	}
	html {
		font-size: 20px !important;
	}
	.page-body {
		margin-top: 2rem;
		padding: .5rem 0;
		background-color: #f2f2f2;
		color: #333;
		font-size: .7rem;
	} */
	@import "./static/icon/iconfont.css";
</style>
