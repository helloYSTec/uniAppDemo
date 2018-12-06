<template>
	<view class="content">
		<header-nav />
		<view class="page-body">
			<view class="base-info">
				<view class="content-title">{{title}}</view>
				<view class="main-card">
					<div class="card-title">
						<h4>{{title}}</h4>
						<div class="card-status">待审核</div>
					</div>
					<div class="base-body">
						<i class="ico ico-user"></i><span class="item-title">申请人：</span><text>王某某</text>
					</div>
					<div class="base-body">
						<i class="ico ico-date"></i><span class="item-title">创建日期： </span><text>2018-12-03 20:30:00</text>
					</div>
				</view>
				<view class="button-box">
					<button><i class="ico ico-yijiao"></i> 移交</button>
					<button><i class="ico ico-shenhe"></i> 审核</button>
					<button><i class="ico ico-bohui"></i> 驳回</button>
				</view>
			</view>
			
			<view class="page-title">新增商品详情</view>
			
			<div class="uni-list-cell uni-collapse base-info">
					<div class="cat-box uni-list-cell-navigate" :class="cardShow ? ' uni-navigate-bottom' : 'uni-navigate-right'" @tap="cardShow =!cardShow">
						<b>类别</b>
					</div>
					<div class="uni-collapse-content" :class="cardShow ? 'uni-active' : ''" v-show="cardShow">
						<div class="main-card">
							<div class="card-top">
								<div>
									<p class="product-name">标题</p>
									<p class="product-detail"><i class="ico ico-cate"></i>1024110023230</p>
								</div>
								<div>
									<p class="product-detail lh28"><text class="unit-text-b1">售价</text> <b class="product-price">￥20.00</b></p>
									<p class="product-detail">100 | 瓶 | <b class="product-status">有效</b></p>
								</div>
							</div>
							<ul class="card-detail">
								<li>进货价格：<text class="uni-text-gray">16.00</text></li>
								<li>是否散装：<text class="uni-text-gray">否</text></li>
								<li>称重方式：<text class="uni-text-gray">计价</text></li>
								<li>生效时间：<text class="uni-text-gray">2018-12-03  20:30:00</text></li>
							</ul>
						</div>
					</div>
					<div class="uni-collapse-content" :class="cardShow ? 'uni-active' : ''" v-show="cardShow">
						<div class="main-card">
							<div class="card-top">
								<div>
									<p class="product-name">标题</p>
									<p class="product-detail"><i class="ico ico-cate"></i>1024110023230</p>
								</div>
								<div>
									<p class="product-detail lh28"><text class="unit-text-b1">售价</text> <b class="product-price">￥20.00</b></p>
									<p class="product-detail">100 | 瓶 | <b class="product-status">有效</b></p>
								</div>
							</div>
							<ul class="card-detail">
								<li>进货价格：<text class="uni-text-gray">16.00</text></li>
								<li>是否散装：<text class="uni-text-gray">否</text></li>
								<li>称重方式：<text class="uni-text-gray">计价</text></li>
								<li>生效时间：<text class="uni-text-gray">2018-12-03  20:30:00</text></li>
							</ul>
						</div>
					</div>
				</div>
			
			<div class="uni-list-cell uni-collapse base-info">
				<div class="cat-box uni-list-cell-navigate" :class="cardShow ? ' uni-navigate-bottom' : 'uni-navigate-right'" @tap="cardShow =!cardShow">
					<b>类别</b>
				</div>
				<div class="uni-collapse-content" :class="cardShow ? 'uni-active' : ''" v-show="cardShow">
					<div class="main-card">
						<div class="card-top">
							<div>
								<p class="product-name">标题</p>
								<p class="product-detail"><i class="ico ico-cate"></i>1024110023230</p>
							</div>
							<div>
								<p class="product-detail lh28"><text class="unit-text-b1">售价</text> <b class="product-price">￥20.00</b></p>
								<p class="product-detail">100 | 瓶 | <b class="product-status">有效</b></p>
							</div>
						</div>
						<ul class="card-detail">
							<li>进货价格：<text class="uni-text-gray">16.00</text></li>
							<li>是否散装：<text class="uni-text-gray">否</text></li>
							<li>称重方式：<text class="uni-text-gray">计价</text></li>
							<li>生效时间：<text class="uni-text-gray">2018-12-03  20:30:00</text></li>
						</ul>
					</div>
				</div>
				<div class="uni-collapse-content" :class="cardShow ? 'uni-active' : ''" v-show="cardShow">
					<div class="main-card">
						<div class="card-top">
							<div>
								<p class="product-name">标题</p>
								<p class="product-detail"><i class="ico ico-cate"></i>1024110023230</p>
							</div>
							<div>
								<p class="product-detail lh28"><text class="unit-text-b1">售价</text> <b class="product-price">￥20.00</b></p>
								<p class="product-detail">100 | 瓶 | <b class="product-status">有效</b></p>
							</div>
						</div>
						<ul class="card-detail">
							<li>进货价格：<text class="uni-text-gray">16.00</text></li>
							<li>是否散装：<text class="uni-text-gray">否</text></li>
							<li>称重方式：<text class="uni-text-gray">计价</text></li>
							<li>生效时间：<text class="uni-text-gray">2018-12-03  20:30:00</text></li>
						</ul>
					</div>
				</div>
			</div>
			
			<view class="base-info">
				<div class="uni-list-cell uni-collapse">
					<div class="cat-box uni-list-cell-navigate" :class="cardShow ? ' uni-navigate-bottom' : 'uni-navigate-right'" @tap="cardShow =!cardShow">
						<b>类别</b>
					</div>
					<div class="process-box uni-collapse-content" :class="cardShow ? 'uni-active' : ''" v-show="cardShow">
						<processUnit />
						<!-- <li>
							<div class="process-status">
								<i class="ico-s" :class="status===0 ? 'ico-bh' : (status===1 ? 'ico-yj' : 'ico-tg')"></i>
								<text :class="status===0 ? 'uni-text-red' : (status===1 ? 'uni-text-blue' : 'uni-text-green')">{{text}}</text>
							</div>
							<div class="process-adv">
								<div>
									<text class="process-role">审核人员：王林</text>
									<text>2018.12.30 20:30</text>
								</div>
								<p class="">审核意见</p>
							</div>
						</li>
						<li>
							<div class="process-status">
								<i class="ico-s" :class="status===0 ? 'ico-bh' : (status===1 ? 'ico-yj' : 'ico-tg')"></i>
								<text :class="status===0 ? 'uni-text-red' : (status===1 ? 'uni-text-blue' : 'uni-text-green')">{{text}}</text>
							</div>
							<div class="process-adv">
								<div>
									<text class="process-role">审核人员：王林</text>
									<text>2018.12.30 20:30</text>
								</div>
								<p class="">审核意见</p>
							</div>
						</li> -->
					</div>
				</div>
			</view>
		</view>
	</view>
</template>

<script>	
	import processUnit from '../../components/auditingProcess/item.vue'
	export default {
		components: {
			processUnit
		},
		data () {
			return {
				pageData: [],
				title: '什么鬼',
				cardShow: true,
				status: 1,
				text: '通过'
			}
		},
		methods :{
		},
		onLoad (options) {
			console.log(options)
		}
	}
</script>

<style scoped>
	@import '../../common/ico.css';
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
		box-shadow: 1upx 1upx 1upx #dcdcdc;
		margin-left: 30upx;
		margin-right: 30upx;
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
	.button-box {
		padding-top: 20upx;
		display: flex;
		padding-bottom: 40upx;
	}
	button:after {
		border: 0;
	}
	button {
		font-size: .7rem;
		width: 198upx;
		background-image: url('../../static/img/button1.png');
		background-position: center;
		background-repeat: no-repeat;
		height: 77upx;
		background-size: contain;
		color: #fff;
		line-height: 70upx;
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
		/* height: 3rem; */
		display: flex;
		justify-content: space-between;
		padding: 20upx 20upx 16upx 20upx;
	}
	.card-top .product-name {
		font-weight: bolder;
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
	.process-box {
		padding: 0 30upx;
	}
	
	
	.uni-list-cell:after {
		height: 0;
	}
	.uni-collapse-content {
		padding-bottom: 40upx;
	}
</style>