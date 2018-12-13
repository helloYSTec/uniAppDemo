<template>
	<view id="expenses">
		<header-nav />
		<view class="page-body">
			<view v-bind:class="{zd:zd}">
				<list-unit v-for="(item,i) in FinanceList" :key="i" @goDetail="goExpensesDetail" :item="item"></list-unit>
			</view>
		</view>
	</view>
</template>

<script>
	import ListUnit from '../../components/listUnit/listUnit.vue'
	export default {
		components: {
			ListUnit
		},
		data () {
			return {
				FinanceList:[
					{
						ACCEPT_CODE: "",
						ACCEPT_NAME: "差旅费不必要",
						ACCEPT_TYPE: 401202,
						ACTDEF_NAME: "部门经理意见",
						DEPT_ID: 1000,
						DEPT_NAME: "浙江省交通投资集团实业发展有限公司",
						FINANCEPROINST_CREATEDATE: "2018/11/22 16:40:47",
						FINANCEPROINST_DESC: "",
						FINANCEPROINST_ENDDATE: "",
						FINANCEPROINST_ID: 1487,
						FINANCEPROINST_NEXTID: 2000,
						NOWACTDEF_IDS: "199520",
						NOWSTAFF_ID: 1,
						NOWSTAFF_NAME: "系统开发者",
						PRODEF_ID: 313,
						PRODEF_NAME: "差旅费报销",
						PROINST_ID: 116017,
						STAFF_ID: 1,
						STAFF_NAME: "系统开发者",
						USER_ID: 1,
						USER_NAME: "系统开发者"
					},
					{
						ACCEPT_CODE: "201811-401201-0080",
						ACCEPT_NAME: "阿尔镜头",
						ACCEPT_TYPE: 401201,
						ACTDEF_NAME: "部门经理意见",
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
						ACTDEF_NAME: "部门经理意见",
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
						ACTDEF_NAME: "申请部门意见",
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
			goExpensesDetail (item) {
				uni.navigateTo({
					url: "../detail/expenseDetail?FINANCEPROINST_ID="+item.FINANCEPROINST_ID+"&ACCEPT_TYPE="+item.ACCEPT_TYPE+"&NOWACTDEF_IDS="+item.NOWACTDEF_IDS+"&FINANCEPROINST_NEXTID="+item.FINANCEPROINST_NEXTID+"&ACTDEF_NAME="+item.ACTDEF_NAME
				});
					
			}
		},
		onLoad () {
			
		}
	}
	
</script>

<style scoped>
	.zd .content:first-child{
		border: 1px solid #fb9154;
	}
</style>
