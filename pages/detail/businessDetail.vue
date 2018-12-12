<template>
	<view class="expense-detail">
		<header-nav />
		<view class="page-body">
			<productDetail :baseData="baseData" :approveList="approveList" :commodityTree="commodityTree" :commodityList="commodityList"/>
		</view>
	</view>
</template>

<script>
	import productDetail from '../../components/businessDetail/productDetail.vue'
	export default {
		data() {
			return {
				expenseData:{} ,// 获取expenses页面参数
				baseData: {}, // 业务信息
				approveList: [] ,// 审批信息
				commodityTree: {},// 商品列表
				commodityList: [],// 商品列表
				// cateArr: []//分类列表
			};
		},
		methods:{
			// 获取页面数据
			getData(){
				let _this = this
				this.$api.post({
						action_type: 'GetHighWayProinstDetail',
						action_data: '4583E56BACB489F5',
						HIGHWAYPROINST_ID: this.$route.query['HIGHWAYPROINST_ID'], // 流程内码
						HIGHWAYPROINST_NEXTID: this.$route.query['HIGHWAYPROINST_NEXTID'], // 流程状态
				}).then( res=>{
					let _data =res.data
					_this.baseData = _data.HighWayRoinst[0]
					_this.approveList = _data.ApproveList
					_this.commodityList = _data.CommodityList
					_this.getCommodityTree(_data.CommodityList)
				})
			},
			getCommodityTree (arr) {
				let map = {}
				let _this = this
				// let cateArr = []
				arr.forEach( el => {
					if (!map[el.COMMODITYTYPE_NAME]) {
						// cateArr.push(el.COMMODITYTYPE_NAME)
						map[el.COMMODITYTYPE_NAME] = {
							cardShow: true,
							child: []
						}
					}
					map[el.COMMODITYTYPE_NAME].child.push(el)
				})
				// _this.cateArr = cateArr
				_this.commodityTree = map
			}
		},
		components:{
			productDetail
		},
		onLoad(option) {
			this.expenseData = option;
			this.getData()
			console.log(option)
		}
	}
</script>

<style>

</style>
