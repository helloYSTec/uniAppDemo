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
	.content{
		margin-left: 30upx;
		margin-right: 30upx;
		background-color: #fff;
		box-shadow: 0px 1px 8px 0.2px #e2e2e2;
		margin-bottom: 20upx;
		position: relative;
		padding: 30upx;
	}
	.contentName {
	  width: 330upx;
	  font-size: 28upx;
	  height: 60upx;
	  overflow: hidden;
      text-overflow: ellipsis;
	  white-space: nowrap;
	}
	.typeImg {
      width: 103upx;
	  position: absolute;
	  top: 0;
	  right: 0.75rem;
	}
	.content-box{
		display: flex;
		font-size: 22upx;
		align-items: center;
	}
	.typeText {
	  color: #fff;
	  position: absolute;
	  top: 0rem;
	  right: 0.8rem;
	  width: 103upx;
	  font-size: 22upx;;
	  text-align: center;
	}
	.L-icon {
	  display: block;
	  background-color: #9c9c9c;
	  width: 22upx;
	  height: 22upx;
	  line-height: 22upx;
	  border-radius: 22upx;
	  text-align: center;
	  color: #fff;
	  margin: 0 11upx 0 0;
	}
	.contentText {
	  display: block;
	  color: #636363;
	}
	.A-icon{
	  display: block;
	  width: 16upx;
	  height: 16upx;
	  line-height: 16upx;
	  border-radius: 16upx;
	  margin: 0 16upx 0 4upx;
	}
	.B-icon {
	  background-color:#74abfe;
	}
	.G-icon {
	  background-color: #44bea3;
	}
	.R-icon {
	  background-color: #fc9153;
	}
	.content-span {
	  color: #636363;
	}
</style>
