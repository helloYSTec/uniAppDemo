<template>
	<view id="expenses">
		<header-nav />
		<view class="page-body">
			<view v-bind:class="{zd:zd}">
				<view class="content" v-for="(item,i) in FinanceList" :key="i" @tap="bill(item)">
						<p class="contentName">{{$util.dateEmpty(item.ACCEPT_NAME)}}</p>
						<!-- <p class="contentState" :class="s[i]">{{item.APPLY_TYPE | dateStatefo}}</p>       -->
						<img v-if='item.FINANCEPROINST_NEXTID === 2000 || item.FINANCEPROINST_NEXTID === 4000|| item.FINANCEPROINST_NEXTID === 9000' class="typeImg" src="../../static/img/examine.png" alt="">
						<img v-if='item.FINANCEPROINST_NEXTID === 1000 || item.FINANCEPROINST_NEXTID === 3000 || item.FINANCEPROINST_NEXTID === ""' class="typeImg" src="../../static/img/Conclusion.png" alt="">
						<p class="typeText">{{$util.processState(item.FINANCEPROINST_NEXTID)}}</p>
						<view class="content-box">
						<span class="L-icon">L</span>
						<span class="contentText">{{item.PRODEF_NAME}}</span>
						</view>
						<view class="content-box">
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
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				FinanceList:[
					{
						ACCEPT_CODE: "201812-401204-0001",
						ACCEPT_NAME: "智慧项目经费预算",
						ACCEPT_TYPE: 401204,
						ACTDEF_NAME: "经办人申请",
						DEPT_ID: 1000,
						DEPT_NAME: "浙江省交通投资集团实业发展有限公司",
						FINANCEPROINST_CREATEDATE: "2018/12/1 21:45:50",
						FINANCEPROINST_DESC: "",
						FINANCEPROINST_ENDDATE: "",
						FINANCEPROINST_ID: 748,
						FINANCEPROINST_NEXTID: 1000,
						NOWACTDEF_IDS: "473830",
						NOWSTAFF_ID: 1,
						NOWSTAFF_NAME: "系统开发者",
						PRODEF_ID: 307,
						PRODEF_NAME: "经费预算申请",
						PROINST_ID: 171878,
						STAFF_ID: 1,
						STAFF_NAME: "系统开发者",
						USER_ID: 1,
						USER_NAME: "系统开发者"
					},
					{
						ACCEPT_CODE: "201812-401205-0001",
						ACCEPT_NAME: "旧电脑报废",
						ACCEPT_TYPE: 401205,
						ACTDEF_NAME: "经办人申请",
						DEPT_ID: 1000,
						DEPT_NAME: "浙江省交通投资集团实业发展有限公司",
						FINANCEPROINST_CREATEDATE: "2018/12/1 21:43:46",
						FINANCEPROINST_DESC: "",
						FINANCEPROINST_ENDDATE: "",
						FINANCEPROINST_ID: 747,
						FINANCEPROINST_NEXTID: 1000,
						NOWACTDEF_IDS: "473831",
						NOWSTAFF_ID: 1,
						NOWSTAFF_NAME: "系统开发者",
						PRODEF_ID: 308,
						PRODEF_NAME: "固定资产处理",
						PROINST_ID: 171877,
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
		
		},
		onLoad () {
			
		}
	}
	
</script>

<style scoped lang="stylus">
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
		font-size: 24upx;
		align-items: center;
	}
	.typeText {
	  color: #fff;
	  position: absolute;
	  top: 0rem;
	  right: 0.8rem;
	  width: 103upx;
	  font-size: 24upx;;
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
