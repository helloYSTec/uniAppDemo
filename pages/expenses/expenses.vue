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
				FinanceList: [], // 财务列表数据
				zd: false
			}
		},
		computed:{
		},
		methods:{
			// 获取财务列表
			getExpenses(){
				uni.showToast({
					title: "loading",
					icon: "loading"
				})
				this.$api.post({
					 action_type: 'GetFinanceList',
					 action_data: 'o6rT6vuvZRSWKlsiu6N1zuqKSLUI',
					 IncludeAcceptance: 0
				}).then(res=>{
					uni.hideLoading()
					this.FinanceList = res.data.FinanceList
				})
			},
			// 跳转详情页面
			goExpensesDetail (item) {
				uni.navigateTo({
					url: "../detail/expenseDetail?FINANCEPROINST_ID="+item.FINANCEPROINST_ID+"&ACCEPT_TYPE="+item.ACCEPT_TYPE+"&NOWACTDEF_IDS="+item.NOWACTDEF_IDS+"&FINANCEPROINST_NEXTID="+item.FINANCEPROINST_NEXTID+"&ACTDEF_NAME="+item.ACTDEF_NAME
				});
					
			}
		},
		created() {
			this.getExpenses()
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
