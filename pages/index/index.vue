<template>
	<view class="content">
        <HeaderNav />
		<view class="page-body">
		</view>
	</view>
</template>

<script>
	import HeaderNav from '@/components/header/header'
	export default {
		components: {
			HeaderNav
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}
    .logo{
        height: 200upx;
        width: 200upx;
        margin-top: 200upx;
    }
	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
