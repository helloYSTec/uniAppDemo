<!-- 差旅费报销 -->
<template>
	<view class="travel-expense" v-show="travelShow">
		<view class="travel-top">
			<view class="detail_top">
				<view class="left_circle"></view>
				<view class="right_circle"></view>
				<view class="detail_top_box">
					<view class="detail_top_name">
						<h3>{{FinanceProinstList.DEPT_NAME}}</h3>
						<h4>{{$util.acceptState(FinanceProinstList.ACCEPT_TYPE)}}</h4>
						<p>{{$util.cutDate(ExpenseBill.EXPENDBILL_DATE)}}</p>
						<view class="detail_top_bottom">
							<ul>
								<li>
									<img class="icon_img" src="../../static/img/sqr_logo.png" alt="">申 &nbsp;请 &nbsp;人: <span>{{FinanceProinstList.STAFF_NAME}}</span>
								</li>
								<li>
									<img class="icon_img" src="../../static/img/bxbm_logo.png" alt="">报销部门: <span>{{ExpenseBill.DEPARTMENT_NAME}}</span>
								</li>
							</ul>
							<ul>
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
		<view class="base-info">
			<div class="uni-list-cell uni-collapse">
				<div class="cat-box uni-list-cell-navigate" :class="cardShow ? ' uni-navigate-bottom' : 'uni-navigate-right'" @tap="cardShow =!cardShow">
					<b>行程详情</b>
				</div>
				<div class="process-box uni-collapse-content" :class="cardShow ? 'uni-active' : ''" v-show="cardShow">
					<view class="travel-middle" v-for="item in ExpenseDetail" :key="item.EXPENSEDETAIL_ID">
						<view class="trip_detail">
							<view class="trip_detail_top">
								<view class="trip_detail_traffic">
									<view>
										<view class="trip_addr" style="display: inline-block;">{{item.START_PLACE}}</view>
										<view class="jt_logo" style="display: inline-block;">
											<img v-if="item.VEHICLE_TYPE==='汽车'" class="img_traffic" src="../../static/img/taxi_logo.png" alt="">
											<img v-else-if="item.VEHICLE_TYPE==='飞机'" class="img_traffic" src="../../static/img/fg_logo.png" alt="">
											<img v-else-if="item.VEHICLE_TYPE==='高铁'" class="img_traffic" src="../../static/img/gt_logo.png" alt="">
											<img v-else-if="item.VEHICLE_TYPE==='火车'" class="img_traffic" src="../../static/img/hc_logo.png" alt="">
											<img v-else-if="item.VEHICLE_TYPE==='轮船'" class="img_traffic" src="../../static/img/lc_logo.png" alt="">
										</view>
										<view class="trip_date">{{$util.cutDate(item.START_DATE)}}</view>
									</view>
									<view>
										<div class="trip_addr" style="margin-bottom: 16upx;">{{item.ARRIVE_PLACE}}</div>
										<div class="trip_date">{{$util.cutDate(item.ARRIVE_DATE)}}</div>
									</view>
									<view>
										<view class="trip_price" style="margin-bottom: 16upx;">交通￥<span>{{item.BILL_AMOUNT}}</span></view>
										<view class="trip_person">
											<view>
												<img style="width: 24upx;" src="../../static/img/rs_logo.png" alt=""><span>{{item.SUBSIDY_POPULATION}}</span>
											</view>
											<view>
												<span></span>
												<img style="width: 36upx;" src="../../static/img/pj_logo.png" alt=""><span>{{item.BILL_COUNT}}</span>
											</view>
										</view>
									</view>
								</view>
							</view>
							<view>
								<ul class="trip_subsidies">
									<li><span>补贴天数：</span><span>{{item.SUBSIDY_DAY}}</span></li>
									<li><span>补贴标准：</span><span>{{item.URBAN_TRAFFIC_ALLOWANCE}}</span></li>
									<li><span>补贴金额：</span><span>{{item.SUBSIDY_AMOUNT}}</span></li>
								</ul>
							</view>
						</view>
					</view>
				</div>
			</div>
		</view>
		<view class="base-info">
			<div class="uni-list-cell uni-collapse">
				<div class="cat-box uni-list-cell-navigate" :class="cardShow2 ? ' uni-navigate-bottom' : 'uni-navigate-right'" @tap="cardShow2 =!cardShow2">
					<b>其他费用</b>
				</div>
				<div class="process-box uni-collapse-content" :class="cardShow2 ? 'uni-active' : ''" v-show="cardShow2">
					<view class="trip_detail">
						<view class="other_fees" style="width:100%;">
							<ul class="other_fees_list" v-for="(item) in ExpenseDetail" :key="item.EXPENSEDETAIL_ID">
								<li class="list_name">
									<span style="padding-left:0.3rem;">{{item.OTHER_COST}}</span>
								</li>
								<li class="list_ticket">
									<img v-if="item.OTHERBILL_COUNT!==''" style="width:36upx;" src="../../static/img/pj_logo.png" alt=""><span
									 style="padding-left:0.3rem;">{{item.OTHERBILL_COUNT}}</span>
								</li>
								<li class="list_price">
									<view class="trip_price" v-if="item.OTHERBILL_COUNT!==''" style="margin-bottom: 16upx;">交通￥<span>{{item.OTHERBILL_AMOUNT}}</span></view>
								</li>
							</ul>
						</view>
					</view>
				</div>
			</div>
		</view>
		<!-- 关联弹出框 -->
		<uni-popup :show="showPopupMiddle" :type="popType" v-on:hidePopup="hidePopup">
			<view style="width: 100%;">
				<h4>{{SubscribefeeTitle}}</h4>
				<div v-if="SubscribefeeTitle !== ''" class="associated">
					<div>
						<div class="lie-left">报销部门</div>
						<div class="lie_right">{{subscribefee.DEPARTMENT_NAME}}</div>
						<br />
					</div>
					<div>
						<div class="lie-left">申请人员</div>
						<div class="lie_right">{{subscribefee.STAFF_NAME}}</div>
						<br />
					</div>
					<div>
						<div class="lie-left">公司名称</div>
						<div class="lie_right">{{subscribefee.DEPT_NAME}}</div>
						<br />
					</div>
					<div>
						<div class="lie-left">申请时间</div>
						<div class="lie_right">{{subscribefee.FINANCEPROINST_CREATEDATE}}</div>
						<br />
					</div>
					<div>
						<div class="lie-left">出差人员</div>
						<div class="lie_right">{{subscribefee.BUSINESS_PERSON}}</div>
						<br />
					</div>
					<div>
						<div class="lie-left">出差事由</div>
						<div class="lie_right">{{subscribefee.BUSINESS_REASON}}</div>
						<br />
					</div>
					<div>
						<div class="lie-left">合计金额</div>
						<div class="lie_right">{{subscribefee.PAYMENT_LOWER}}</div>
						<br />
					</div>
				</div>
			</view>
		</uni-popup>
		<!-- 审批流程 -->
		<view class="base-info" v-if="rejectApproved.length>0">
			<div class="uni-list-cell uni-collapse">
				<div class="cat-box uni-list-cell-navigate">
					<b>驳回意见</b>
				</div>
				<div class="process-box uni-collapse-content">
					<processUnit v-for="item in rejectApproved" :item="item" :key="item.APPROVED_DATE" :approveType='0' />
				</div>
			</div>
		</view>
		<view class="base-info" v-if="ApproveList.length > 0">
			<div class="uni-list-cell uni-collapse">
				<div class="cat-box uni-list-cell-navigate" :class="cardShow3 ? ' uni-navigate-bottom' : 'uni-navigate-right'" @tap="cardShow3 =!cardShow3">
					<b>审批流程</b>
				</div>
				<div class="process-box uni-collapse-content" :class="cardShow3 ? 'uni-active' : ''" v-show="cardShow3">
					<processUnit v-for="item in ApproveList" :item="item" :key="item.APPROVED_DATE" :approveType='1' />
				</div>
			</div>
		</view>
	</view>
</template>

<script>
	// import {mapState,mapGetters } from 'vuex';
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
		data() {
			return {
				popData: { //审批驳回移交字段
					title: '',
					button: '',
					selectData: [],
					userData: [],
					notUserData:false,
					popShow: false
				},
				showPopupMiddle: false,
				popType: 'middle',
				cardShow: true, // 控制折叠面板
				cardShow2: true,
				cardShow3: true,
				isExamine: false, // 按钮显示隐藏
			};
		},
		components: {
			uniPopup,
			processUnit,
			popModel
		},
		computed: {},
		methods: {
			// 关联详情点击事件
			clickGetSubscribefee() {
				let body = document.getElementsByTagName('body')[0];
				body.style.overflow = "hidden";
				this.popType = 'middle';
				this.showPopupMiddle = true;
			},
			// 关联详情隐藏
			hidePopup() {
				let body = document.getElementsByTagName('body')[0];
				body.style.overflow = "auto";
				this.showPopupMiddle = false;
			},
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
					notUserData: false,
					popShow: false
				}
				switch (value) {
					case 4000:
						popData.title = "请选择移交人员"
						popData.button = "移交"
						_this.getTransferUser(_this.FinanceProinstList.NOWACTDEF_IDS,1)
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
						if (el.ActDef_Type && el.ActDef_Type===5010) {
							_this.popData.notUserData = true
						}
						_this.popData.selectData.push({
							label: el[name[0]],
							value: el[name[1]]
						})
					})
				})
			},
			getTransferUser(nextId,type) { // 获取人员信息
				let _this = this
				let arr={
					action_type: 'GetFlowTransferUser',
					action_data: '4583E56BACB489F5',
					// FINANCEPROINST_ID: _this.FinanceProinstList.FINANCEPROINST_ID,
					NextACTDEF_IDS: nextId,
				}
				if(type){
					arr.TransferType = type
				}
				this.$api.get(arr).then((res) => {
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
				let _this = this
				let arr = {
					action_type: 'SubmitFinaceInfo',
					action_data: 'o6rT6vuvZRSWKlsiu6N1zuqKSLUI',
					FINANCEPROINST_ID: _this.FinanceProinstList.FINANCEPROINST_ID,
					FINANCEPROINST_NEXTID: data.HIGHWAYPROINST_NEXTID,
					Handover_UserID: data.NextSTAFF_ID,
					NOWACTDEF_IDS: _this.FinanceProinstList.NOWACTDEF_IDS,
					OPERATION_TYPE: _this.FinanceProinstList.ACCEPT_TYPE,
					APPROVED_INFO: data.APPROVED_INFO,
					NextSTAFF_ID: data.NextSTAFF_ID,
					NextACTDEF_IDS: data.NextACTDEF_IDS
				}
				if (arr.FINANCEPROINST_NEXTID === 4000) {
					delete arr.NextACTDEF_IDS
					delete arr.NextSTAFF_ID
					delete arr.APPROVED_INFO
					delete arr.OPERATION_TYPE
				} else {
					delete arr.Handover_UserID
				}
				this.$api.post(arr).then(res => {
					let _data = res.data.ResultObject[0]
					_this.clearPopData()
					if (_data.ResultCode === '100') {
						uni.showToast({
							title: _data.ResultDesc,
							success() {
								uni.redirectTo({
									url: '/pages/expenses/expenses'
								})
							}
						})

					}
				})
			}
		},
		created() {

		},
		onLoad() {

		}
	}
</script>

<style scoped>
	@import '../../static/css/expensesTop.css';

	.base-info {
		background-color: #fff;
		padding: 0 30upx;
	}

	.uni-list-cell:after {
		height: 0;
	}

	.base-info {
		margin-top: 30upx;
	}

	.trip_detail {
		width: 100%;
		border: 1px solid rgb(234, 234, 234);
		box-shadow: 0px 1px 8px rgb(234, 234, 234);
		border-radius: 7px;
		margin-bottom: 20upx;
		padding: 20upx 24upx;
	}

	.trip_detail_top {
		width: 100%;
		border-bottom: 1px dashed rgb(234, 234, 234);
		box-sizing: border-box;
		padding-bottom: 10upx;
	}

	.trip_detail_traffic {
		display: flex;
		justify-content: space-between;
	}

	.trip_addr {
		font-size: 32upx;
		width: 128upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.trip_date {
		font-size: 24upx;
	}

	/* .trip_detail_traffic>view{
		display: flex;
	} */
	/* .trip_detail_traffic span{
		font-size: 36upx;
	} */
	.jt_logo {
		background: url(../../static/img/jc_logo.png) no-repeat center 36upx;
		background-size: 100%;
		width: 50px;
		text-align: center;
		margin: 0 20upx;
		vertical-align: top;
	}

	.img_traffic {
		width: 44upx;
		height: auto;
		padding-bottom: 8upx;
	}

	.trip_price {
		color: #6cc09c;
		font-size: 28upx;
	}

	.trip_price span {
		font-weight: bold;
		color: #ec8538;
		font-size: 32upx;
		margin-left: 10upx;
	}

	.trip_person {
		display: flex;
		justify-content: space-between;
	}

	.trip_person view {
		display: flex;
		align-items: center;
	}

	.trip_person view:first-child {
		border-right: 1px solid #ccc;
	}

	.trip_person view:last-child {
		text-align: right;
	}

	.trip_person span {
		padding: 0 12upx;
		;
	}

	.trip_subsidies {
		display: flex;
		justify-content: space-between;
		margin-top: 10upx;
	}

	.trip_subsidies span {
		font-size: 24upx;
	}

	.other_fees>ul:nth-child(n+2) {
		border-top: 1px dashed #ccc;
		padding-top: 20upx;
		;
	}

	.other_fees>ul.other_fees_list {
		display: flex;
		justify-content: space-between;

	}

	.other_fees_list li.list_name {
		width: 40%;
	}

	.other_fees_list li.list_ticket {
		width: 30%;
	}

	.other_fees_list li.list_price {
		width: 30%;
	}

	.other_fees_list img {
		width: 40upx;
		vertical-align: middle;
	}

	.associated>div {
		display: flex;
		justify-content: space-between;
	}

	.lie-left {
		width: 25%;
		font-size: 28upx;
		line-height: 60upx;
	}

	.lie_right {
		width: 75%;
		color: #999999;
		font-size: 28upx;
		text-align: right;
	}
</style>
