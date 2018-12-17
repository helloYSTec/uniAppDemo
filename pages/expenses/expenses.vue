<template>
	<view id="expenses">
		<header-nav />
		<view class="page-body">
			<view class="search">
				<i class="iconfont icon-sousuo" @tap="showDrawer=!showDrawer"></i>
				<uni-drawer :visible="showDrawer" mode="right" @close="closeRightDrawer">
					<div class="drawer-box">
						<div class="drawer-content">
							<p class="uni-title"><span>流程名称</span><span @tap="isHidden = !isHidden" class="more-btn">全部<i class="uni-icon" :class="isHidden ? 'uni-icon-arrowup' : 'uni-icon-arrowdown'"></i></span></p>
							<div class="tag-box" :class="isHidden ? 'tag-fold-active' : 'tag-fold'">
								<uni-tag :class="searchKeys.indexOf(tag.value)>-1 ? 'acitve' :''" :text="tag.label" v-for="tag in expenseModules"
								 :key="tag.value" @click="needModules(tag.value)"></uni-tag>
							</div>

							<p class="uni-title"><span>办理状态</span></p>
							<div class="tag-box">
								<uni-tag :class="searchCodes.indexOf(tag.value)>-1 ? 'acitve' :''" :text="tag.label" v-for="tag in expenseCodes"
								 :key="tag.value" @click="needCodes(tag.value)"></uni-tag>
							</div>
						</div>
						<div class="drawer-button-box">
							<div class="cancel-button" @tap="clearKeys">重置</div>
							<div class="confirm-button" @tap="postKeys">确定</div>
						</div>
					</div>
				</uni-drawer>
			</view>
			<view v-bind:class="{zd:zd}">
				<list-unit v-for="(item,i) in FinanceList" :key="i" @goDetail="goExpensesDetail" :item="item"></list-unit>
			</view>
		</view>
	</view>
</template>

<script>
	import ListUnit from '../../components/listUnit/listUnit.vue'
	import uniDrawer from '../../components/uniComponents/uni-drawer.vue'
	import uniTag from '../../components/uniComponents/uni-tag.vue'
	import uniLoadMore from '../../components/uniComponents/uni-load-more.vue'
	export default {
		components: {
			ListUnit,
			uniDrawer,
			uniTag,
			uniLoadMore
		},
		data() {
			return {
				FinanceList: [], // 财务列表数据
				zd: false,
				showDrawer: false,
				searchKeys: [], //被选中模块的业务状态
				searchCodes: [], //被选中办理的状态
				isHidden:false, //控制折叠
				expenseCodes: [{
						label: '办理中',
						value: '2000',
					},
					{
						label: '已驳回',
						value: '3000',
					},
					{
						label: '已移交',
						value: '4000',
					},
					{
						label: '已审结',
						value: '9000',
					}
				],
				expenseModules: [{ // 业务模块
						label: '费用报销审批',
						value: '401201',
					},
					{
						label: '差旅费报销',
						value: '401202',
					},
					{
						label: '公务交通费用',
						value: '401207',
					},
					{
						label: '差旅费超标准',
						value: '401206',
					}, {
						label: '行政资产申请',
						value: '401101',
						isCheck: false
					},
					{
						label: '公务接待审批',
						value: '401102',
					},
					{
						label: '工程款支付',
						value: '401203',
					},
					{
						label: '经费预算申请',
						value: '401204',
					},
					{
						label: '固定资产处理',
						value: '401205',
					},
					{
						label: '内部转账审批',
						value: '401301',
					},
					{
						label: '大额支付审批',
						value: '401302',
					},
					{
						label: '支票领用审批',
						value: '401303',
					},
					{
						label: '领付款申请',
						value: '401304',
					}
				],
			}
		},
		computed: {},
		methods: {
			// 获取财务列表
			getExpenses() {
				uni.showToast({
					title: "loading",
					icon: "loading"
				})
				this.$api.post({
					action_type: 'GetFinanceList',
					action_data: 'o6rT6vuvZRSWKlsiu6N1zuqKSLUI',
					IncludeAcceptance: 0,
					ProdefName:this.searchKeys.join(','),
					ActinstState:this.searchCodes.join(','),
				}).then(res => {
					uni.hideLoading()
					this.FinanceList = res.data.FinanceList
				})
			},
			// 跳转详情页面
			goExpensesDetail(item) {
				uni.navigateTo({
					url: "../detail/expenseDetail?FINANCEPROINST_ID=" + item.FINANCEPROINST_ID + "&ACCEPT_TYPE=" + item.ACCEPT_TYPE +
						"&NOWACTDEF_IDS=" + item.NOWACTDEF_IDS + "&FINANCEPROINST_NEXTID=" + item.FINANCEPROINST_NEXTID +
						"&ACTDEF_NAME=" + item.ACTDEF_NAME
				});

			},
			closeRightDrawer() {
				this.showDrawer = false;
			},
			// 获取选中业务状态
			needModules(id){
				let index = this.searchKeys.indexOf(id)
				if(index !== -1){
					this.searchKeys.splice(index,1)
				}else{
					this.searchKeys.push(id)
				}
			},
			// 获取办理选中状态
			needCodes(id){
				let index = this.searchCodes.indexOf(id)
				if(index !== -1){
					this.searchCodes.splice(index,1)
				}else{
					this.searchCodes.push(id)
				}
			},
			clearKeys () {
				this.searchKeys = []
				this.searchCodes = []
			},
			postKeys () {
				// this.pageData.pageIndex = 1
				// this.pageList = []
				this.getExpenses()
				this.closeRightDrawer()
			}
		},
		created() {
			this.getExpenses()
		},
		onLoad() {

		}
	}
</script>

<style>
	.zd .content:first-child {
		border: 1px solid #fb9154;
	}

	.search {
		display: flex;
		justify-content: flex-end;
		padding: 0 30upx;
		height: 60upx;
		line-height: 60upx;
		margin-bottom: 10upx;
	}

	.search i {
		font-size: 50upx;
	}

	.tag-box {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.tag-fold {
		height: 160upx;
		overflow: hidden;
		-moz-transition: height 0.5s;
		/* Firefox 4 */
		-webkit-transition: height 0.5s;
		/* Safari 和 Chrome */
		-o-transition: height 0.5s;
		/* Opera */
		transition: height 0.5s;
	}
	.tag-fold-active{
		height: 400upx;
		overflow: hidden;
		-moz-transition: height 0.5s;
		-webkit-transition: height 0.5s;
		-o-transition: height 0.5s;
		transition: height 0.5s;
	}
	.drawer-box {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.drawer-content {
		padding: 20upx 26upx;
	}

	.uni-title {
		display: flex;
		justify-content: space-between;
		padding-bottom: 0;
	}

	.uni-title span.more-btn {
		color: #bebebe;
		font-size: 24upx;
	}
	.more-btn i{
		font-size: 40upx;
	}
	
	.drawer-button-box {
		display: flex;
	}

	.uni-tag {
		width: 176upx;
		height: 64upx;
		margin-top: 16upx;
		line-height: 64upx;
		text-align: center;
		color: #999999;
		font-size: 24upx;
		background-color: #f2f1f1;
		padding: 0;
	}

	.uni-tag.acitve {
		background-color: #fb8b56;
		color: #fff;
	}

	.drawer-button-box>div {
		flex: 1;
		text-align: center;
		color: #fff;
		line-height: 80upx;
		height: 80upx;
	}

	.cancel-button {
		background-color: #4c4a5a;
	}

	.confirm-button {
		background-color: #fb8b56;
	}
</style>
