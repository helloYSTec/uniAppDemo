<template>
	<view id="expenses">
		<header-nav />
		<view class="page-body">
			<div class="search-box">
				<i class="iconfont icon-sousuo" @tap="showDrawer=!showDrawer"></i>
				<uni-drawer :visible="showDrawer" mode="right" @close="closeRightDrawer" >
					<div class="drawer-box">
						<div class="drawer-content">
							<p class="uni-title">选择状态</p>
							<div class="tag-box">
								<uni-tag :class="searchKeys.indexOf(tag.id)>-1 ? 'acitve' :''" :text="tag.name" v-for="tag in tagList" :key="tag.id" @click="needKeys(tag.id)"></uni-tag>
							</div>
						</div>
						
						<div class="drawer-button-box">
							<div class="cancel-button" @tap="clearKeys">重置</div>
							<div class="confirm-button" @tap="postKeys">确定</div>
						</div>
					</div>
				</uni-drawer>
			</div>
			<view v-bind:class="{zd:zd}" v-if="pageList.length>0">
				<list-unit class="content" v-for="(item, i) in pageList" :key="i" @goDetail="goDetail" :item='item'></list-unit>
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
				zd: false,
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				showDrawer: false, // 是否打开侧搜索边栏
				searchKeys: [], // 被选中的筛选状态
				totalLength: 0,
				pageData: {
					pageIndex: 1,  // 页码
					pageSize: 10, // 每页显示多少条
					pageType: true ,// 是否还可加载
					ActinstState: '' // 
				},
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
					action_data: '4583E56BACB489F5',
					pageIndex: _this.pageData.pageIndex,
					ActinstState: _this.searchKeys.join(',')
				}
				this.$api.post(json).then(res => {
					let _data = res.data.HighwayPoinstList
					if (_data.length>0){
						_this.pageList = _this.pageList.concat(_data)
					}
					_this.totalLength = _this.pageList.length
					_this.loadingType = 0
					if (res.data.HighwayPoinstList.length<10){
						_this.loadingType = 2
						_this.pageData.pageType = false
					}
				})
			},
			closeRightDrawer () {
				let _this = this
				_this.showDrawer = !_this.showDrawer
			},
			needKeys(id) {
				let _this = this
				let newKeys = _this.searchKeys
				if (_this.searchKeys.indexOf(id)>-1) {
					newKeys = newKeys.filter(el => {el!==id})
				} else {
					newKeys.push(id)
				}
				_this.searchKeys = newKeys
			},
			clearKeys () {
				let _this = this
				_this.searchKeys = []
			},
			postKeys () {
				let _this = this
				_this.pageData.pageIndex = 1
				_this.pageList = []
				_this.getList()
				_this.closeRightDrawer()
			}
		},
		onReachBottom() { // 页面上拉触底事件的处理函数
			let _this = this
			_this.loadingType = 1
			if (_this.pageData.pageType) {
				_this.pageData.pageIndex += 1
				_this.getList()
			}else {
				_this.loadingType = 2
			}
// 			setTimeout(() => {
// 				if (length > _this.totalLength) {
// 					_this.loadingType = 2;
// 					return;
// 				}
// 				_this.list = _this.list.concat(list);
// 				_this.loadingType = 0;
// 			}, 800);
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
	.tag-box {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
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
	.drawer-button-box {
		display: flex;
	}
	.uni-tag {
		width: 128upx;
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
	.drawer-button-box > div {
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
