<script>
	
	export default {
		data () {
			return {
				appid: 'wx85e69a5fb601be16',
				weChatUserData: {} // 公众号用户信息
			}
		},
		methods: {
			getLocation () {
				let _this = this
				_this.appid = _this.$route.query['appid']
				let type = _this.$route.query['type']
				
				switch(type) {
					case 1: 
						_this.WechatLogin()
						break;
				}
			},
			WechatLogin() {
				let _this = this
				let code = this.$route.query['code'] || myClass.getQueryString('code')
				if (!code) {
					let local = location.href;
					let postUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + _this.appid + '&redirect_uri=' + encodeURIComponent(local) + '&response_type=code&scope=snsapi_base&state=1#wechat_redirect'
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
			getAppId() {
				let _this = this
				uni.request({
					url: 'http://mall.eshangtech.com:6060',
					method: 'GET',
					data: {
						action_type: 'GetWechatInfo',
						RegisterType: 4,
						action_data: code
						
					},
					success: (res) => {
						_this.appid = res.data.WechatInfoObject[0].appid
					},
					fail: (res) => {
						console.log(res);
					}
					
				})
			}
		},
		created () {
			
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
