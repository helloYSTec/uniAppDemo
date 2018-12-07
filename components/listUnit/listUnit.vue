<template>
		<div class="content" @tap='goExpensesDetail'>
			<p class="contentName">{{$util.dateEmpty(item.ACCEPT_NAME)}}</p>
				<img v-if='item.FINANCEPROINST_NEXTID === 2000 || item.FINANCEPROINST_NEXTID === 4000|| item.FINANCEPROINST_NEXTID === 9000' class="typeImg" src="../../static/img/examine.png" alt="">
				<img v-if='item.FINANCEPROINST_NEXTID === 1000 || item.FINANCEPROINST_NEXTID === 3000 || item.FINANCEPROINST_NEXTID === ""' class="typeImg" src="../../static/img/Conclusion.png" alt="">
			<p class="typeText">{{$util.processState(item.FINANCEPROINST_NEXTID)}}</p>
			<view class="content-box">
				<span class="L-icon">L</span>
				<span class="contentText">{{item.PRODEF_NAME}}</span>
			</view>
			<view class="content-box" v-show="item.ACTDEF_NAME">
				<span class="B-icon A-icon"></span>
				<span class="content-span">当前环节：{{item.ACTDEF_NAME || '已办结'}}</span>
			</view>
			<view class="content-box">
				<span class="G-icon A-icon"></span>
				<span class="content-span">申请人员：{{$util.dateEmpty(item.STAFF_NAME)}}</span>
			</view>
			<view class="content-box">
				<span class="R-icon A-icon"></span>
				<span class="content-span">申请时间：{{$util.dateEmpty(item.FINANCEPROINST_CREATEDATE)}}</span>
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
			goExpensesDetail () {
				this.$emit('goDetail', this.item)
			}
		}
	}
</script>

<style scoped>
	@import '../../static/css/listUnit.css';
</style>
