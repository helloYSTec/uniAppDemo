<!-- 费用报销审批 -->
<template>
	<view class="reimbursement" v-show="travelShow">
		<view class="travel-top">
			<view class="detail_top">
				<view class="left_circle2"></view>
				<view class="right_circle2"></view>
				<view class="detail_top_box">
					<view class="detail_top_name">
						<h3>{{FinanceProinstList.DEPT_NAME}}</h3>
						<h4>{{$util.acceptState(FinanceProinstList.ACCEPT_TYPE)}}</h4>
						<div class="detail-top-base">
							<div>
								<span>{{ExpenseBill.DEPARTMENT_NAME}}：</span><span class="detail_base_name">{{FinanceProinstList.STAFF_NAME}}</span>
							</div>
							<span>{{$util.cutDate(ExpenseBill.EXPENDBILL_DATE)}}</span>
						</div>
						<div class="detail-top-base">
							<div>
								<span>报销金额：</span><span class="detail_base_price">￥{{ExpenseBill.PAYMENT_LOWER}}</span>
							</div>
							<div>
								<i class="ico ico-gzk"></i>
								<span v-if="ExpenseBill.EXPENDBILL_TYPE === 1000">公务卡</span>
								<span v-if="ExpenseBill.EXPENDBILL_TYPE === 2000">工资卡</span>
								<span v-if="ExpenseBill.EXPENDBILL_TYPE === 3000">现金</span>
								<span v-if="ExpenseBill.EXPENDBILL_TYPE === 4000">公对公转账</span>
							</div>
						</div>
						<view>
							<ul class="detail_top_bottom">
								<li>
									<img class="icon_img" src="../../static/img/sqr_logo.png" alt="">申 &nbsp;请 &nbsp;人: <span>{{FinanceProinstList.STAFF_NAME}}</span>
								</li>
								<li>
									<img class="icon_img" src="../../static/img/bxbm_logo.png" alt="">报销部门: <span>{{ExpenseBill.DEPARTMENT_NAME}}</span>
								</li>
							</ul>
							<ul class="detail_top_bottom" style="border:none">
								<li>
									<img class="icon_img" src="../../static/img/bxje_logo.png" alt="">报销金额: <span>{{ExpenseBill.PAYMENT_LOWER}}</span>
								</li>
								<li>
									<img class="icon_img" src="../../static/img/rzlx_logo.png" alt="">入账类型:
									<span v-if="ExpenseBill.EXPENDBILL_TYPE === 1000">公务卡</span>
									<span v-if="ExpenseBill.EXPENDBILL_TYPE === 2000">工资卡</span>
									<span v-if="ExpenseBill.EXPENDBILL_TYPE === 3000">现金</span>
									<span v-if="ExpenseBill.EXPENDBILL_TYPE === 4000">公对公转账</span>
								</li>
							</ul>
						</view>
					</view>
				</view>
			</view>

			<view class="detail_middle">
				<view style="padding: 0 24upx">
					<ul class="detail_middle_box">
						<li>
							<div>
								<img class="icon_img" src="../../static/img/ccry_logo.png" alt="">出差人员:
							</div>
							<div>
								{{ExpenseBill.BUSINESS_PERSON}}
							</div>
						</li>
						<li>
							<div>
								<img class="icon_img" src="../../static/img/ccsy_lgoo.png" alt="">出差事由:
							</div>
							<div>
								{{ExpenseBill.BUSINESS_REASON}}
							</div>
						</li>
						<li v-if="SubscribefeeTitle !== ''">
							<div>
								<img class="icon_img" src="../../static/img/xmgl_logo.png" alt="">项目关联:
							</div>
							<div style="color:#63a1e6;" @tap="clickGetSubscribefee()">
								<span style="border-bottom: 1px solid rgb(99, 161, 230)">{{SubscribefeeTitle}}</span>
							</div>
						</li>
						<li>
							<div v-show="ImageList.length > 0" class="attachment" style="width: unset;">
								<div>
									<img class="icon_img" src="../../static/img/fj_logo.png" alt="">附&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;件:
								</div>
								<div class="imgBox">
									<img v-for="(arr,i) in ImageList" :key="i" :src="arr" preview="0" preview-text="附件图片">
								</div>
							</div>
						</li>
					</ul>
				</view>
			</view>
			<popModel v-if="FinanceProinstList.NOWSTAFF_ID === PassportList.USER_ID" :popData="popData" @showPop="showPop"
			 @closePop='closePop' @postData='postData' @getTransferUser='getTransferUser' @onCancel='clearPopData' />
		</view>
	</view>
</template>

<script>
	import uniPopup from '../../components/uniComponents/uni-popup.vue';
	import processUnit from '../auditingProcess/item.vue'
	import popModel from '../auditingPop/popModel.vue'
	export default {
		props: {
			ExpenseBill: {
				required: true,
				type: Object
			},
			FinanceProinstList: {
				required: true,
				type: Object
			},
			ApproveList: {
				required: true,
				type: Array
			},
			PassportList: {
				required: true,
				type: Object
			},
			ImageList: {
				required: true,
				type: Array
			},
			ExpenseDetail: {
				required: true,
				type: Array
			},
			rejectApproved: {
				required: true,
				type: Array
			},
			travelShow: {
				required: true,
				type: Boolean
			},
			SubscribefeeShow: {
				required: true,
				type: Boolean
			},
			SubscribefeeTitle: {
				required: true,
				type: String
			},
			subscribefee: {
				required: true,
				type: Object
			},
		},
		components: {
			uniPopup,
			processUnit,
			popModel
		},
		data() {
			return {
				popData: { //审批驳回移交字段
					title: '',
					button: '',
					selectData: [],
					userData: [],
					popShow: false
				},
			};
		},
		methods: {
			closePop(val) {
				this.popData.popShow = false;
				this.clearPopData()
			},
			showPop(value) {
				let _this = this
				let popData = {
					title: '',
					button: '',
					selectData: [],
					userData: [],
					popShow: false
				}
				switch (value) {
					case 4000:
						popData.title = "请选择移交人员"
						popData.button = "移交"
						_this.getTransferUser(_this.FinanceProinstList.NOWACTDEF_IDS)
						break;
					case 2000:
						popData.title = "请确认审核当前业务到下一个环节"
						popData.button = "审核"
						_this.getHighNextActDef(value)
						break;
					default:
						popData.title = "请确认驳回当前业务到下一个环节"
						popData.button = "驳回"
						_this.getHighNextActDef(value)
						break;
				}
				popData.popShow = true
				popData.type = value
				_this.popData = popData

			},
			getHighNextActDef(type) { // 获取下一环节 type:2000 审核,3000驳回,4000移交
				let _this = this
				this.$api.get({
					action_type: 'GetFlowNextActDef',
					action_data: '4583E56BACB489F5',
					FINANCEPROINST_ID: _this.FinanceProinstList.FINANCEPROINST_ID,
					FINANCEPROINST_NEXTID: type
				}).then((res) => {
					console.log(res)
					let name = ['ActDef_Name', 'ActDef_ID'] //默认审核
					if (type === 3000) { // 否则回退
						name = ['ActInst_Name', 'ActInst_ID']
					}
					res.data.NextActDefList.forEach(el => {
						_this.popData.selectData.push({
							label: el[name[0]],
							value: el[name[1]]
						})
					})
				})
			},
			getTransferUser(nextId) { // 获取人员信息
				let _this = this
				this.$api.get({
					action_type: 'GetFlowTransferUser',
					action_data: '4583E56BACB489F5',
					FINANCEPROINST_ID: _this.FinanceProinstList.FINANCEPROINST_ID,
					FINANCEPROINST_NEXTID: nextId
				}).then((res) => {
					res.data.TransferUserList.forEach(el => {
						// debugger
						_this.popData.userData.push({
							label: el.USER_NAME,
							value: el.USER_ID
						})
					})
				})
			},
			clearPopData() {
				let _this = this
				_this.popData = {
					title: '',
					button: '',
					selectData: [],
					userData: [],
					popShow: false
				}
			},
			postData(data) {
				this.$api.post({
					action_type: 'SubmitFinaceInfo',

				})
			}
		}
	}
</script>

<style scoped>
	@import '../../static/css/expensesTop.css';
</style>
