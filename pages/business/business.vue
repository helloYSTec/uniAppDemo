<template>
	<view id="expenses">
		<header-nav />
		<view class="page-body">
			<div class="search-box">
				<i class="iconfont icon-sousuo" @tap="showDrawer=!showDrawer"></i>
				<uni-drawer :visible="showDrawer" mode="right" @close="closeRightDrawer">
					<div>
						<uni-tag :text="tag.name" v-for="tag in tagList" :key="tag.id"></uni-tag>
					</div>
					<button>确定</button>
				</uni-drawer>
			</div>
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
	import uniDrawer from '../../components/uniComponents/uni-drawer.vue'
	import uniTag from '../../components/uniComponents/uni-tag.vue'
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
				showDrawer: false, // 是否打开侧搜索边栏
				totalLength: 0,
				pageRow: 10, // 每次下拉更新数据条数
				tagList: [
					{
						id: 2000,
						name: "办理中",
					},{
						id: 4000,
						name: "已移交",
					},{
						id: 9000,
						name: "已审结",
					},{
						id: 3000,
						name: "已驳回",
					}
				]
			}
		},
		components: {
			listUnit,
			uniLoadMore,
			uniDrawer,
			uniTag
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
	.search-box {
		display: flex;
		justify-content: flex-end;
		padding: 0 30upx;
		height: 60upx;
		line-height: 60upx;
		margin-bottom: 10upx;
	}
	.search-box i {
		font-size: 50upx;
	}
</style>
