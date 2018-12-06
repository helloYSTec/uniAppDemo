<template>
	<view class="expense-detail">
		<header-nav />
		<view class="page-body">
			<template v-if="expenseData.ACCEPT_TYPE==='401202'">
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
				expenseData:{} // 获取expenses页面参数
			};
		},
		methods:{
			// 获取页面数据
			getExpenseData(){
				
			}
		},
		components:{
			travelExpense
		},
		onLoad(option) {
			this.expenseData = option
			console.log(option)
		}
	}
</script>

<style>

</style>
