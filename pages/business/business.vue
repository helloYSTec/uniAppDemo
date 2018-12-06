<template>
	<view id="expenses">
		<header-nav />
		<view class="page-body">
			<view v-bind:class="{zd:zd}">
				<div class="content" v-for="(item, i) in pageList" :key="i" @tap='goDetail(item)'>
					<p class="contentName">{{$util.dateEmpty(item.ACCEPT_NAME)}}</p>
						<img v-if='item.FINANCEPROINST_NEXTID === 2000 || item.FINANCEPROINST_NEXTID === 4000|| item.FINANCEPROINST_NEXTID === 9000' class="typeImg" src="../../static/img/examine.png" alt="">
						<img v-if='item.FINANCEPROINST_NEXTID === 1000 || item.FINANCEPROINST_NEXTID === 3000 || item.FINANCEPROINST_NEXTID === ""' class="typeImg" src="../../static/img/Conclusion.png" alt="">
					<p class="typeText">{{$util.processState(item.FINANCEPROINST_NEXTID)}}</p>
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
						<span class="content-span">申请时间：{{$util.dateEmpty(item.FINANCEPROINST_CREATEDATE)}}</span>
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
				FinanceList:[
					{
						ACCEPT_CODE: "201811-401202-0046",
						ACCEPT_NAME: "山东泰安服务区现在调研考察，是否智慧服务区的效果会比浙江的更好。学习对方优势。",
						ACCEPT_TYPE: 401202,
						DEPT_ID: 1000,
						DEPT_NAME: "浙江省交通投资集团实业发展有限公司",
						FINANCEPROINST_CREATEDATE: "2018/11/28 15:45:59",
						FINANCEPROINST_DESC: "",
						FINANCEPROINST_ENDDATE: "",
						FINANCEPROINST_ID: 637,
						FINANCEPROINST_NEXTID: 2000,
						NOWACTDEF_IDS: "469910",
						NOWSTAFF_ID: 5603,
						NOWSTAFF_NAME: "胡书香",
						PRODEF_ID: 305,
						PRODEF_NAME: "差旅费报销",
						PROINST_ID: 171484,
						STAFF_ID: 1,
						STAFF_NAME: "系统开发者",
						USER_ID: 1,
						USER_NAME: "系统开发者"
					},
					{
						ACCEPT_CODE: "201811-401201-0080",
						ACCEPT_NAME: "阿尔镜头",
						ACCEPT_TYPE: 401201,
						DEPT_ID: 1000,
						DEPT_NAME: "浙江省交通投资集团实业发展有限公司",
						FINANCEPROINST_CREATEDATE: "2018/11/26 22:27:33",
						FINANCEPROINST_DESC: "暗黑界",
						FINANCEPROINST_ENDDATE: "",
						FINANCEPROINST_ID: 531,
						FINANCEPROINST_NEXTID: 2000,
						NOWACTDEF_IDS: "469234",
						NOWSTAFF_ID: 5603,
						NOWSTAFF_NAME: "胡书香",
						PRODEF_ID: 304,
						PRODEF_NAME: "费用报销",
						PROINST_ID: 171117,
						STAFF_ID: 1,
						STAFF_NAME: "系统开发者",
						USER_ID: 1,
						USER_NAME: "系统开发者"
					},
					{
						ACCEPT_CODE: "201811-401206-0013",
						ACCEPT_NAME: "省外实施",
						ACCEPT_TYPE: 401206,
						DEPT_ID: 1000,
						DEPT_NAME: "浙江省交通投资集团实业发展有限公司",
						FINANCEPROINST_CREATEDATE: "2018/11/30 22:29:16",
						FINANCEPROINST_DESC: "",
						FINANCEPROINST_ENDDATE: "",
						FINANCEPROINST_ID: 737,
						FINANCEPROINST_NEXTID: 2000,
						NOWACTDEF_IDS: "471654",
						NOWSTAFF_ID: 1,
						NOWSTAFF_NAME: "系统开发者",
						PRODEF_ID: 331,
						PRODEF_NAME: "差旅费超标准",
						PROINST_ID: 171853,
						STAFF_ID: 1,
						STAFF_NAME: "系统开发者",
						USER_ID: 1,
						USER_NAME: "系统开发者"
					},
					{
						ACCEPT_CODE: "201811-401101-0013",
						ACCEPT_NAME: "行政部门办公用品申请",
						ACCEPT_TYPE: 401101,
						DEPT_ID: 1000,
						DEPT_NAME: "浙江省交通投资集团实业发展有限公司",
						FINANCEPROINST_CREATEDATE: "2018/11/30 22:46:39",
						FINANCEPROINST_DESC: "",
						FINANCEPROINST_ENDDATE: "",
						FINANCEPROINST_ID: 738,
						FINANCEPROINST_NEXTID: 2000,
						NOWACTDEF_IDS: "471656",
						NOWSTAFF_ID: 1,
						NOWSTAFF_NAME: "系统开发者",
						PRODEF_ID: 301,
						PRODEF_NAME: "行政资产申请",
						PROINST_ID: 171854,
						STAFF_ID: 1,
						STAFF_NAME: "系统开发者",
						USER_ID: 1,
						USER_NAME: "系统开发者"
					}
				],
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
