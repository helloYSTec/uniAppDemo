<template>
	<view class="expense-detail">
		<header-nav />
		<view class="page-body">
			<template v-if="expenseData.ACCEPT_TYPE==='401202'">
				<productDetail />
			</template>
		</view>
	</view>
</template>

<script>
	import productDetail from '../../components/businessDetail/productDetail.vue'
	export default {
		data() {
			return {
				expenseData:{} // 获取expenses页面参数
			};
		},
		methods:{
			// 获取页面数据
			getData(){
				this.$api.post({
						action_type: 'GetExpenseDetail',
						action_data: 'o6rT6vuvZRSWKlsiu6N1zuqKSLUI',
						FINANCEPROINST_ID: this.$route.query['FINANCEPROINST_ID'], //业务内码
						OPERATION_TYPE:this.$route.query['ACCEPT_TYPE'], //业务类型
						FINANCEPROINST_NEXTID: this.$route.query['FINANCEPROINST_NEXTID'] //流程状态
				}).then( res=>{
					console.log(res)
				})
			}
		},
		components:{
			productDetail
		},
		onLoad(option) {
			this.expenseData = option;
			this.getExpenseData()
			console.log(option)
		}
	}
</script>

<style>

</style>
