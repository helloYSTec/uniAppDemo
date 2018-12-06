<template>
	<view id="expenses">
		<header-nav />
		<view class="page-body">
			<view v-bind:class="{zd:zd}">
				<div class="content" v-for="(item, i) in pageList" :key="i" @tap='goDetail(item)'>
					<p class="contentName">{{$util.dateEmpty(item.SERVERPART_NAME)}}</p>
					<p class="contentState" :class="item.HIGHWAYPROINST_NEXTID!=='9000' ? 'text-org' : '' ">{{$util.businessStatus(item.ACCEPT_CODE)}}</p>
					<img class="typeImg" :src="item.HIGHWAYPROINST_NEXTID==='9000' ? '../../static/img/Conclusion.png' : '../../static/img/examine.png'" alt="">
					<p class="typeText">{{$util.businessStatus(item.HIGHWAYPROINST_NEXTID)}}</p>
					<view class="content-box">
						<span class="L-icon">L</span>
						<span class="contentText">{{item.DEPT_NAME}}</span>
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
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				pageList: [],
				zd: false
			}
		},
		computed:{
		},
		methods:{
			goDetail (item) {
				uni.navigateTo({
					url: "../detail/businessDetail?FINANCEPROINST_ID="+item.FINANCEPROINST_ID+"&ACCEPT_TYPE="+item.ACCEPT_TYPE+"&NOWACTDEF_IDS="+item.NOWACTDEF_IDS+"&FINANCEPROINST_NEXTID="+item.FINANCEPROINST_NEXTID+"&ACTDEF_NAME="+item.ACTDEF_NAME
				});
					
			},
			getList () {
				let _this = this
				let json = {
					action_type: 'GetAllHighWayProinst',
					ChangePrice: '0',
					PROINST_ID: '0,1',
					action_data: 'oLBr30oH1UhVQRcj2XIMxtSlIxQE'
				}
				this.$api.post(json).then(res => {
					_this.pageList  = res.data.ALLHIGHWAYPROINST
					console.log(res.data)
				})
			}
		},
		created () {
			this.getList()
		},
		onLoad () {
			
		}
	}
	
</script>

<style scoped>
	.zd .content:first-child{
		border: 1px solid #fb9154;
	}
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
	.contentState {
	  position: absolute;
	  right: 30upx;
	  bottom: 10upx;
	  color: #c9c9c9;
	  font-size: 24upx;
	}
	.text-org.contentState {
		color: #fc9153;
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
