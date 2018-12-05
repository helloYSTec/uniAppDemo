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
	page {
		background-color:#F4F5F6;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
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
