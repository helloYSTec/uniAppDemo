<template>
	<view id="expenses">
		<header-nav />
		<view class="page-body">
			<view v-bind:class="{zd:zd}" v-if="list.length>0">
				<list-unit class="content" v-for="(item, i) in list" :key="i" @goDetail="goDetail" :item='item'></list-unit>
			</view>
			<uni-load-more :loadingType="loadingType" :contentText="contentText"></uni-load-more>
		</view>
	</view>
</template>

<script>
	import listUnit from '../../components/listUnit/businessListUnit.vue'
	import uniLoadMore from '../../components/uniComponents/uni-load-more.vue'
	export default {
		data () {
			return {
				pageList: [],
				list: [{}],
				loadingType: 0,
				zd: false,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				totalLength: 0,
				pageRow: 10 // 每次下拉更新数据条数
			}
		},
		components: {
			listUnit,
			uniLoadMore
		},
		methods: {
			goDetail (item) {
				console.log(item)
				uni.navigateTo({
					url: "../detail/businessDetail?HIGHWAYPROINST_ID="+item.HIGHWAYPROINST_ID+"&HIGHWAYPROINST_NEXTID="+item.HIGHWAYPROINST_NEXTID
				});
					
			},
			getList () {
				let _this = this
				let json = {
					action_type: 'GetHighWayProinstList',
					action_data: '4583E56BACB489F5'
				}
				this.$api.post(json).then(res => {
					_this.pageList  = res.data.HighwayPoinstList
					_this.totalLength = _this.pageList.length
					_this.getPage()
					console.log(res.data)
				})
			},
			getPage () {
				let list = [];
				let originList = this.pageList
				for (let i = 0; i < 11; i++) {
					list.push(originList[i]);
				}
				this.list = list;
			}
		},
		onReachBottom() { // 页面上拉触底事件的处理函数
			let _this = this
			if (_this.loadingType !== 0) {
				return;
			}
			_this.loadingType = 1;
			let list = [],
				maxItem = _this.list.length - 1,
				length = maxItem + _this.pageRow;
			for (let i = maxItem + 1; i < length; i++) {
				list.push(_this.pageList[i]);
			}
			setTimeout(() => {
				if (length > _this.totalLength) {
					_this.loadingType = 2;
					return;
				}
				_this.list = _this.list.concat(list);
				_this.loadingType = 0;
			}, 800);
		},
		created () {
			this.getList()
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
