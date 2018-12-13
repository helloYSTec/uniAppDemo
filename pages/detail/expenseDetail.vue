<template>
	<view class="expense-detail">
		<header-nav />
		<view style="margin-top: 30upx;">
			<template v-if="expenseParam.ACCEPT_TYPE==='401202'">
				<travel-expense></travel-expense>
			</template>
			<template v-if="expenseParam.ACCEPT_TYPE==='401101'">
				<administrative></administrative>
			</template>
			<template v-if="expenseParam.ACCEPT_TYPE==='401102'">
				<official-entertaining></official-entertaining>
			</template>
			<template v-if="expenseParam.ACCEPT_TYPE==='401201'">
				<reimbursement></reimbursement>
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
			};
		},
		methods:{
		},
		components:{
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
		},
		onLoad(option) {
			this.expenseParam = option;
		}
	}
</script>

<style>

</style>
