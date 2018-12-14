<template>
	<view class="expense-detail">
		<header-nav />
		<view style="margin-top: 30upx;">
			<template v-if="expenseParam.ACCEPT_TYPE==='401202'">
				<travel-expense 
				:ExpenseBill="ExpenseBill" 
				:FinanceProinstList="FinanceProinstList" 
				:ApproveList="ApproveList"
				:PassportList="PassportList" 
				:ImageList="ImageList"
				:ExpenseDetail="ExpenseDetail"
				:rejectApproved="rejectApproved"
				:travelShow="travelShow"
				:SubscribefeeShow="SubscribefeeShow"
				:SubscribefeeTitle="SubscribefeeTitle"
				:subscribefee="subscribefee"
				></travel-expense>
			</template>
			<template v-if="expenseParam.ACCEPT_TYPE==='401101'">
				<administrative></administrative>
			</template>
			<template v-if="expenseParam.ACCEPT_TYPE==='401102'">
				<official-entertaining></official-entertaining>
			</template>
			<template v-if="expenseParam.ACCEPT_TYPE==='401201'">
				<reimbursement
				:ExpenseBill="ExpenseBill" 
				:FinanceProinstList="FinanceProinstList" 
				:ApproveList="ApproveList"
				:PassportList="PassportList" 
				:ImageList="ImageList"
				:ExpenseDetail="ExpenseDetail"
				:rejectApproved="rejectApproved"
				:travelShow="travelShow"
				:SubscribefeeShow="SubscribefeeShow"
				:SubscribefeeTitle="SubscribefeeTitle"
				:subscribefee="subscribefee"
				></reimbursement>
			</template>
			<template v-if="expenseParam.ACCEPT_TYPE==='401203'">
				<engineering></engineering>
			</template>
			<template v-if="expenseParam.ACCEPT_TYPE==='401204'">
				<budget></budget>
			</template>
			<template v-if="expenseParam.ACCEPT_TYPE==='401205'">
				<fixed-assets></fixed-assets>
			</template>
			<template v-if="expenseParam.ACCEPT_TYPE==='401301'">
				<internal-transfer></internal-transfer>
			</template>
			<template v-if="expenseParam.ACCEPT_TYPE==='401302'">
				<big-pay></big-pay>
			</template>
			<template v-if="expenseParam.ACCEPT_TYPE==='401303'">
				<check-recipients></check-recipients>
			</template>
			<template v-if="expenseParam.ACCEPT_TYPE==='401304'">
				<get-payment></get-payment>
			</template>
			<template v-if="expenseParam.ACCEPT_TYPE==='401207'">
				<public-transportation></public-transportation>
			</template>
			<template v-if="expenseParam.ACCEPT_TYPE==='401206'">
				<travel-excessive></travel-excessive>
			</template>
		</view>
	</view>
</template>

<script>
	import travelExpense from '../../components/expensesComponents/travelExpense.vue' //差旅费报销
	import administrative from '../../components/expensesComponents/administrative.vue' //行政资产申购
	import bigPay from '../../components/expensesComponents/bigPay.vue' //大额支付签呈
	import budget from '../../components/expensesComponents/budget.vue' //经费预算申请
	import checkRecipients from '../../components/expensesComponents/checkRecipients.vue' //支票领用审批
	import engineering from '../../components/expensesComponents/engineering.vue' //工程款支付
	import fixedAssets from '../../components/expensesComponents/fixedAssets.vue' //固定资产处理
	import getPayment from '../../components/expensesComponents/getPayment.vue' //领付款申请
	import internalTransfer from '../../components/expensesComponents/internalTransfer.vue' //内部转账审批
	import officialEntertaining from '../../components/expensesComponents/officialEntertaining.vue' //公务接待审批
	import publicTransportation from '../../components/expensesComponents/publicTransportation.vue' //公务交通费用审批
	import reimbursement from '../../components/expensesComponents/reimbursement.vue' //费用报销审批
	import travelExcessive from '../../components/expensesComponents/travelExcessive.vue' //差旅费超标准审批
	export default {
		data() {
			return {
				expenseParam: {}, // 页面参数
				ExpenseBill: {}, //费用账单
				FinanceProinstList: {},
				ApproveList: [], //同意意见列表
				PassportList: {},
				ImageList: [], // 附件图片列表
				ExpenseDetail: [], //费用详情
				rejectApproved: [] ,//驳回意见列表
				SubscribefeeShow: false, //已办结业务
				SubscribefeeTitle: '', //业务标题
				subscribefee: { //差旅费超标准列表详情
					DEPARTMENT_NAME: '', // 报销部门
					STAFF_NAME: '', // 申请人员
					DEPT_NAME: '', // 公司名称
					FINANCEPROINST_CREATEDATE: '', // 申请时间
					BUSINESS_PERSON: '', // 出差人员
					BUSINESS_REASON: '', // 出差事由
					PAYMENT_LOWER: '', // 合计金额
				}
			};
		},
		methods: {
			// 获取页面数据
			getExpenseData() {
				this.travelShow = false
				uni.showToast({
					title: "loading",
					icon: "loading"
				})
				let _this = this
				this.$api.post({
					action_type: 'GetExpenseDetail',
					action_data: 'o6rT6vuvZRSWKlsiu6N1zuqKSLUI',
					FINANCEPROINST_ID: this.$route.query['FINANCEPROINST_ID'], //业务内码
					OPERATION_TYPE: this.$route.query['ACCEPT_TYPE'], //业务类型
					FINANCEPROINST_NEXTID: this.$route.query['FINANCEPROINST_NEXTID'] //流程状态
				}).then(res => {
					this.travelShow = true
					uni.hideLoading()
					console.log(res.data)
					this.ExpenseBill = res.data.ExpenseBill[0];
					this.FinanceProinstList = res.data.FinanceProinstList[0];
					// this.title = this.$util.acceptState(this.FinanceProinstList.ACCEPT_TYPE)
					uni.setNavigationBarTitle({
						title: this.$util.acceptState(this.FinanceProinstList.ACCEPT_TYPE)
					});			
					this.ApproveList = res.data.ApproveList;
					// this.rejectApproved = res.data.RejectApproved;
					this.ExpenseDetail = res.data.ExpenseDetail;
					this.PassportList = res.data.PassportList[0];
					if (res.data.ImageList && res.data.ImageList.length > 0) {
						let arr = res.data.ImageList.map(v => {
							return v.IMAGE_URL.replace(/-/g, '/')
						})
						arr.forEach(v => {
							_this.$util.getBase64(v).then(res => {
								_this.ImageList.push(res)
								_this.$previewRefresh() //图片放大功能
							})
						})
					};
					// 获取关联
					if(res.data.FinanceProinstList[0].FINANCEPROINST_FIELD!==""){
						this.GetSubscribefee(res.data.FinanceProinstList[0].FINANCEPROINST_FIELD, false)
					}
				})
			},
			// 获取关联详情
			GetSubscribefee(id,isClick) {
				this.$api.post({
					action_type: 'GetTravelExpenseDetail',
					FINANCEPROINST_ID: id
				}).then(res => {
					if (res && res.data && res.data.ExpenseBill && res.data.FinanceProinstList) {
						console.log(res.data)
						this.SubscribefeeTitle = res.data.FinanceProinstList[0].ACCEPT_NAME
						this.subscribefee = {
							DEPARTMENT_NAME: res.data.ExpenseBill[0].DEPARTMENT_NAME, // 报销部门
							STAFF_NAME: res.data.FinanceProinstList[0].STAFF_NAME, // 申请人员
							DEPT_NAME: res.data.FinanceProinstList[0].DEPT_NAME, // 公司名称
							FINANCEPROINST_CREATEDATE: res.data.FinanceProinstList[0].FINANCEPROINST_CREATEDATE, // 申请时间
							BUSINESS_PERSON: res.data.ExpenseBill[0].BUSINESS_PERSON, // 出差人员
							BUSINESS_REASON: res.data.ExpenseBill[0].BUSINESS_REASON, // 出差事由
							PAYMENT_LOWER: res.data.ExpenseBill[0].PAYMENT_LOWER, // 合计金额
						}
					}
					isClick ? this.SubscribefeeShow = true : this.SubscribefeeShow = false
				})
			},
		},
		components: {
			travelExpense,
			administrative,
			bigPay,
			budget,
			checkRecipients,
			engineering,
			fixedAssets,
			getPayment,
			internalTransfer,
			officialEntertaining,
			publicTransportation,
			reimbursement,
			travelExcessive
		},
		created() {
			this.getExpenseData();
		},
		onLoad(option) {
			this.expenseParam = option;
		}
	}
</script>

<style>

</style>
