<script>
	
	export default {
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
	@import "./static/font/iconfont.css";
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
		margin-top: 110upx;
		padding-top: 20upx;
		background-color: #f2f2f2;
		color: #333;
	}
	.open-ico:before {
		content: "\E60A";
	}
	/*每个页面公共css */
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
</style>
