<template>
	<div class="content" @tap='goDetail'>
		<p class="contentName">{{$util.dateEmpty(item.SERVERPART_NAME)}}</p>
		<p class="contentState" :class="item.HIGHWAYPROINST_NEXTID!=='9000' ? 'text-org' : '' ">{{$util.businessStatus(item.ACCEPT_CODE)}}</p>
		<img class="typeImg" :src="item.HIGHWAYPROINST_NEXTID==='9000' ? '../../static/img/Conclusion.png' : '../../static/img/examine.png'" alt="">
		<p class="typeText">{{$util.businessStatus(item.HIGHWAYPROINST_NEXTID)}}</p>
		<view class="content-box">
			<span class="L-icon">L</span>
			<span class="contentText">{{item.PRODEF_NAME}}</span>
		</view>
		<view class="content-box">
			<span class="G-icon A-icon"></span>
			<span class="content-span">申请人员：{{$util.dateEmpty(item.STAFF_NAME)}}</span>
		</view>
		<view class="content-box">
			<span class="R-icon A-icon"></span>
			<span class="content-span">申请时间：{{$util.dateEmpty(item.HIGHWAYPROINST_CREATEDATE)}}</span>
		</view>
	</div>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				required: true
			}
		},
		data () {
			return {
				
			}
		},
		methods: {
			goDetail () {
				this.$emit('goDetail', this.item)
			}
		}
	}
</script>

<style scoped>
	@import '../../static/css/listUnit.css';
</style>
