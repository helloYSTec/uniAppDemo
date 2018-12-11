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
		},
		components:{
			travelExpense
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
