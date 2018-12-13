<template>
	<view>
		<view class="base-info">
			<view class="content-title">{{baseData.PRODEF_NAME}}</view>
			<view class="main-card">
				<div class="card-title">
					<h4>{{baseData.SERVERPART_NAME}}</h4>
					<div class="card-status">{{$util.businessStatus(baseData.HIGHWAYPROINST_NEXTID)}}</div>
				</div>
				<div class="base-body">
					<i class="ico ico-user"></i><span class="item-title">申请人：</span><text>{{baseData.STAFF_NAME}}</text>
				</div>
				<div class="base-body">
					<i class="ico ico-date"></i><span class="item-title">创建日期： </span><text>{{baseData.HIGHWAYPROINST_CREATEDATE}}</text>
				</div>
			</view>
			<popModel
			 :popData="popData"
			 @showPop="showPop"
			 @closePop='closePop'
			 @postData='postData'
			 @getTransferUser='getTransferUser'
			 @onCancel='clearPopData'
			 />
			
		</view>
		
		<view class="page-title">{{$util.businessStatus(baseData.ACCEPT_CODE)}}详情</view>
		
		<div class="uni-list-cell uni-collapse base-info" v-for="(item,index) in cateArr" :key="index">
			<div class="cat-box uni-list-cell-navigate" :class="commodityTree[item].cardShow ? ' uni-navigate-bottom' : 'uni-navigate-right'" @tap="commodityTree[item].cardShow = !commodityTree[item].cardShow">
				<b>{{item}}</b>
			</div>
			<div class="uni-collapse-content" :class="commodityTree[item].cardShow ? 'uni-active' : ''" v-show="commodityTree[item].cardShow">
				<div class="main-card" v-for="proUnit in commodityTree[item].child" :key="proUnit.COMMODITY_ID">
					<div class="card-top">
						<div>
							<p class="product-name">{{proUnit.COMMODITY_NAME}}</p>
							<p class="product-detail"><i class="ico ico-cate"></i>{{proUnit.COMMODITY_BARCODE}}</p>
						</div>
						<div>
							<p class="product-detail lh28"><text class="unit-text-b1">售价</text> <b class="product-price">￥{{proUnit.COMMODITY_CURRPRICE}}</b></p>
							<p class="product-detail">{{proUnit.COMMODITY_RULE}} | {{proUnit.COMMODITY_UNIT}} | <b class="product-status">{{proUnit.COMMODITY_STATE===1 ? '有效': '无效'}}</b></p>
						</div>
					</div>
					<ul :class="(baseData.ACCEPT_CODE!=='100200' && baseData.ACCEPT_CODE!=='100201') ? 'card-detail': (getChange[proUnit.COMMODITY_ID] ? 'card-change-detail' : 'no-show')" >
						<template v-if="(baseData.ACCEPT_CODE!=='100200' && baseData.ACCEPT_CODE!=='100201')">
							<li>进货价格：<text class="uni-text-gray">{{proUnit.COMMODITY_ORIPRICE}}</text></li>
							<li>是否散装：<text class="uni-text-gray">{{proUnit.ISBULL ? '是' : '否'}}</text></li>
							<li>称重方式：<text class="uni-text-gray">{{proUnit.METERINGMETHOD}}</text></li>
						</template>
						<template v-else>
							<!-- 调整的商品参数 -->
							<li v-for='(changeItem, i) in getChange[proUnit.COMMODITY_ID]' :key="i">
								{{changeItem.changeName}}:
								<template v-if="changeItem.changeName.indexOf('价')>-1">
									<b class="product-price">￥{{changeItem.nowV}}</b>
									<text class="through-line"> <span class="text-b9">￥{{changeItem.org}}</span></text>
									<b class="uni-icon" :class="(changeItem.org < changeItem.nowV) ?'uni-icon-arrowthinup': ' uni-icon-arrowthindown'"></b>
								</template>
								<template v-else>
									<text class="uni-text-gray">{{changeItem.nowV}}</text>
									<text class="through-line">{{changeItem.org}}</text>
								</template>
								
							</li>
						</template>
						<li v-if="baseData.HIGHWAYPROINST_NEXTID==='9000'">生效时间：<text class="uni-text-gray">{{proUnit.OPERATE_DATE}}</text></li>
					</ul>
				</div>
			</div>
		</div>
		<view class="base-info" v-if="rejectApproved.length>0">
			<div class="uni-list-cell uni-collapse">
				<div class="cat-box uni-list-cell-navigate">
					<b>驳回意见</b>
				</div>
				<div class="process-box uni-collapse-content">
					<processUnit v-for="item in rejectApproved" :item="item" :key="item.APPROVED_DATE"/>
				</div>
			</div>
		</view>
		<view class="base-info">
			<div class="uni-list-cell uni-collapse">
				<div class="cat-box uni-list-cell-navigate" :class="cardShow ? ' uni-navigate-bottom' : 'uni-navigate-right'" @tap="cardShow =!cardShow">
					<b>审批流程</b>
				</div>
				<div class="process-box uni-collapse-content" :class="cardShow ? 'uni-active' : ''" v-show="cardShow">
					<processUnit v-for="item in approveList" :item="item" :key="item.APPROVED_DATE"/>
				</div>
			</div>
		</view>
		
		
	</view>
</template>

<script>
	const json = {
		COMMODITY_NAME: '品名',
		COMMODITY_BARCODE: '条码',
		COMMODITYTYPE_NAME: '类别',
		COMMODITY_UNIT: '单位',
		COMMODITY_RULE: '规格',
		COMMODITY_STATE_NAME: '状态',
		COMMODITY_ORI: '产地',
		COMMODITY_CURRPRICE: '售价',
		COMMODITY_PURCHASEPRICE: '进价',
		BUSINESSTYPE_NAME: '业态',
		COMMODITY_GRADE_NAME: '质量等级',
		ISBULK_NAME	: '是否散装',
		METERINGMETHOD_NAME: '称重方式',
	}
	
	import processUnit from '../auditingProcess/item.vue'
	import popModel from '../auditingPop/popModel.vue'
	export default {
		props: {
			baseData: {
				required: true,
				type: Object
			},
			approveList: {
				required: true,
				type: Array
			},
			commodityTree: {
				required: true,
				type: Object
			},
			commodityList: { // 商品
				required: true,
				type: Array
			},
			rejectApproved: {
				required: true,
				type: Array
			}
		},
		components: {
			processUnit,
			popModel
		},
		computed: {
			getChange () { // 获取调整过的商品参数
				let _this = this
				let itemName = Object.keys(json) // 数据名称
				let changeItem = {} // 
				
				_this.commodityList.forEach(item => {
					itemName.forEach(el => {
						let fName ='F_'+ el 

						// item[el] 现参数值 item[fName] 原参数值
						if (item[fName] && item[el]!==item[fName]) { 

							if (!changeItem[item.COMMODITY_ID]) {
								changeItem[item.COMMODITY_ID] = []
							}
							let originValue = item[fName]
							let nowValue = item[el]
							
							changeItem[item.COMMODITY_ID].push({
								changeName: json[el],
								org: originValue,
								nowV: nowValue
							})
						}
					})
				})
				return changeItem
			},
			cateArr() {
				let _this = this
				return Object.keys(_this.commodityTree)
			}
		},
		data () {
			return {
				pageData: [],
				cardShow: true,
				popData: {
					title: '',
					button:'',
					selectData: [],
					userData: [],
					popShow: false
				}
			}
		},
		methods: {
			closePop (val) {
				this.popData.popShow = false;
				this.clearPopData()
			},
			showPop (value) {
				let _this = this
				let popData = {
					title: '',
					button:'',
					selectData: [],
					userData: [],
					popShow: false
				}
				switch (value) {
					case 4000:
						popData.title= "请选择移交人员"
						popData.button= "移交"
						_this.getTransferUser(_this.baseData.NOWACTDEF_ID)
						break;
					case 2000: 
						popData.title= "请确认审核当前业务到下一个环节"
						popData.button= "审核"
						_this.getHighNextActDef(value)
						break;
					default:
						popData.title= "请确认驳回当前业务到下一个环节" 
						popData.button= "驳回"
						_this.getHighNextActDef(value)
						break;
				}
				popData.popShow = true
				popData.type = value
				_this.popData = popData
				
			},
			getHighNextActDef(type) { // 获取下一环节
				let _this = this
				this.$api.get({
					action_type: 'GetHighNextActDef',
					action_data: '4583E56BACB489F5',
					HIGHWAYPROINST_ID: _this.baseData.HIGHWAYPROINST_ID,
					HIGHWAYPROINST_NEXTID: type
				}).then((res)=> {
					console.log(res)
					let name = ['ActDef_Name', 'ActDef_ID'] //默认审核
					if (type===3000) { // 否则回退
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
				debugger
				let _this = this
				this.$api.get({
					action_type: 'GetTransferUser',
					action_data: '4583E56BACB489F5',
					HIGHWAYPROINST_ID: _this.baseData.HIGHWAYPROINST_ID,
					NextACTDEF_IDS: nextId
				}).then((res)=> {
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
				let  _this= this
				_this.popData = {
					title: '',
					button:'',
					selectData: [],
					userData: [],
					popShow: false
				}
			},
			postData (data) {
				debugger

				let _this = this
				let arr = {
					action_type: 'SubmitApproveInfo',
					action_data: '4583E56BACB489F5',
					HIGHWAYPROINST_ID: _this.baseData.HIGHWAYPROINST_ID,
					NOWACTINST_IDS: _this.baseData.NOWACTINST_ID,
					HIGHWAYPROINST_NEXTID: data.HIGHWAYPROINST_NEXTID,
					NextACTDEF_IDS: data.NextACTDEF_ID,
					NextSTAFF_ID: data.NextSTAFF_ID,
					APPROVED_INFO: data.APPROVED_INFO,
				}
				if (arr.HIGHWAYPROINST_NEXTID===4000) {
					delete arr.NextACTDEF_IDS
				}
				this.$api.post(arr).then((res)=> {
					let _data = res.data.ResultObject
					_this.clearPopData()
					if (_data.ResultCode===200) {
						_this.$router.push('/pages/business/business')
					}
					console.log(_data.ResultDesc)
				})
			}
		},
		onLoad (options) {
			console.log(options)
		}
	}
</script>

<style scoped>
	@import '../../common/ico.css';
	.uni-icon {
		font-size: 28upx;
		font-weight: bolder;
	}
	.uni-icon-arrowthindown {
		color: #50b045;
	}
	.uni-icon-arrowthinup {
		color: #ff4952;
	}
	.no-show {
		display: none;
	}
	.lh28 {
		line-height: 54upx;
	}
	.base-info {
		background-color: #fff;
	}
	.base-info + .base-info {
		margin-top: 20upx;
	} 
	.content-title {
		height: 115upx;
		line-height: 115upx;
		text-align: center;
		position: relative;
	}
	.content-title:before {
		background: url('../../static/img/bt_logo.png') no-repeat center center;
		background-size: contain;
		position: absolute;
		top: 0;
		left: 50%;
		height: 115upx;
		width: 90%;
		content: '';
		transform: translate(-50%);
	}
	.main-card {
		border: 1upx solid #dcdcdc;
		border-radius: 10upx;
		box-shadow: 0 2upx 4upx rgba(0, 0, 0, 0.16); 
		margin-left: 30upx;
		margin-right: 30upx;
	}
	.main-card +.main-card {
		margin-top: 20upx;
	}
	.card-title {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	.card-title h4 {
		padding: 20upx 0 15upx 20upx;
	}
	.card-status {
		background: url('../../static/img/bg_orig.png') no-repeat left top;
		background-size: contain;
		color: #fff;
		width: 120upx;
		height: 80upx;
		font-size: 20upx;
		text-align: right;
		position: relative;
		top: -1upx;
		padding-right: 10upx;
	}
	.base-body {
		font-size: 24upx;
		display: flex;
		justify-content: flex-start;
		padding: 15upx 20upx;
	}
	.item-title {
		color: #777;
		width: 120upx;
		text-align: justify;
		height: 40upx;
		/* white-space: nowrap; */
	}
	
	.item-title:after{
		display: inline-block ;
		content: ''; 
		padding-left: 100%; 
	}
	.base-body + .base-body {
		border-top: 1upx dashed #eee;
	}
	.page-title {
		padding: 15upx 0 15upx 30upx;
		font-size: 26upx;
		color: #949494;
		background-color: #eee;
	}
	.cat-card {
		padding: 30upx 0;
	}
	.cat-box {
		justify-content: space-between;
		display: flex;
		margin-left: 30upx;
		margin-right: 30upx;
	}
	.cat-title {
		font-weight: bolder;
	}
	.card-top {
		display: flex;
		justify-content: space-between;
		padding: 20upx 20upx 16upx 20upx;
	}
	.card-top .product-name {
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	    width: 434upx;
		font-size: 30upx;
	}	
	.product-detail {
		color: #696969;
		font-size: 24upx;
	}
	.product-price {
		color: #ee8437;
		margin-left: 10upx;
	}
	.product-status {
		color: #6dbf9c;
	}
	.card-detail {
		border-top: 1upx dashed #eee;
		display: flex;
		flex-wrap: wrap;
		padding: 0 20upx 20upx 20upx;
	}
	.card-detail li {
		padding-top: 20upx;
		line-height: 30upx;
		flex: 33.3%;
		font-size: 20upx;
	}
	.card-change-detail {
		border-top: 1upx dashed #eee;
		padding: 0 20upx 20upx 20upx;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}
	.card-change-detail li {
		padding-top: 20upx;
		line-height: 30upx;
		font-size: 25upx;
		padding-right: 20upx;
	}
	.card-change-detail .through-line {
		text-decoration: line-through;
		color: #cbcbcb;
		margin-left: 16upx;
	}
	.text-b9 {
		color: #b9b9b9
	}
	.process-box {
		padding: 0 20upx 0 30upx;
	}
	.uni-list-cell:after {
		height: 0;
	}
	.uni-collapse-content {
		padding-bottom: 40upx;
	}
</style>