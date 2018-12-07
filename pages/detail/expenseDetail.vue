<template>
	<view class="expense-detail">
		<header-nav />
		<view class="page-body">
			<template v-if="expenseParam.ACCEPT_TYPE==='401202'">
				<travel-expense></travel-expense>
			</template>
		</view>
	</view>
</template>

<script>
	import travelExpense from '../../components/expensesComponents/travelExpense.vue'
	export default {
		data() {
			return {
				expenseParam: {}, // 页面参数
			};
		},
		methods:{
			// 获取页面数据
			getExpenseData(){
				this.$api.post({
						action_type: 'GetExpenseDetail',
						action_data: 'o6rT6vuvZRSWKlsiu6N1zuqKSLUI',
						FINANCEPROINST_ID: this.expenseParam.FINANCEPROINST_ID, //业务内码
						OPERATION_TYPE:this.expenseParam.ACCEPT_TYPE, //业务类型
						FINANCEPROINST_NEXTID: this.expenseParam.FINANCEPROINST_NEXTID //流程状态
				}).then(res=>{
					// console.log(res.data)
					this.$store.commit('changeExpenseData', res.data)
					// console.log(this.expenseData.FinanceProinstList[0])
				})
			}
		},
		components:{
			travelExpense
		},
		created() {
		},
		onLoad(option) {
			this.expenseParam = option;
			this.getExpenseData()
		}
	}
</script>

<style>

</style>
