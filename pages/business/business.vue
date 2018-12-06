<template>
	<view class="content">
		<header-nav />
		<view class="page-body">
			<view class="base-info">
				<view class="content-title">{{title}}</view>
				<view class="main-card">
					<div class="card-title">{{title}}</div>
					<div class="base-body">
						<i class="ico ico-user"></i><text>申请人:</text>
					</div>
					<div class="base-body">
						<i class="ico ico-date"></i><text class="ico2">创建日期:</text>
					</div>
				</view>
				<view class="button-box">
					<button><i class="ico ico-yijiao"></i> 移交</button>
					<button><i class="ico ico-shenhe"></i> 审核</button>
					<button><i class="ico ico-bohui"></i> 驳回</button>
				</view>
			</view>
			
			<view class="page-title">新增商品详情</view>
			
			<view class="base-info">
				<div class="uni-list-cell uni-collapse">
					<div class="cat-box uni-list-cell-navigate" :class="cardShow ? ' uni-navigate-bottom' : 'uni-navigate-right'" @tap="cardShow =!cardShow">
						<b>类别</b>
					</div>
					<div class="uni-collapse-content" :class="cardShow ? 'uni-active' : ''" v-show="cardShow">
						<div class="main-card">
							<div class="card-top">
								<div>
									<p class="product-name">标题</p>
									<p class="product-detail"><i class="ico ico-cate"></i>货号</p>
								</div>
								<div>
									<p class="product-detail"><text class="unit-text-b1"></text>售价 <text class="product-price"></text></p>
									<p class="product-detail">单位 | <text class="product-status"></text></p>
								</div>
							</div>
							<ul class="card-detail">
								<li>进货价格：<text class="uni-text-gray"></text></li>
								<li>是否散装：<text class="uni-text-gray"></text></li>
								<li>称重方式：<text class="uni-text-gray"></text></li>
								<li>生效时间：<text class="uni-text-gray"></text></li>
							</ul>
						</div>
						
					</div>
				</div>
			</view>
			
			<view class="base-info">
				<div class="uni-list-cell uni-collapse">
					<div class="cat-box uni-list-cell-navigate" :class="cardShow ? ' uni-navigate-bottom' : 'uni-navigate-right'" @tap="cardShow =!cardShow">
						<b>类别</b>
					</div>
					<ul class="process-box uni-collapse-content" :class="cardShow ? 'uni-active' : ''" v-show="cardShow">
						<li>
							<div class="process-status">
								<i class="ico-s" :class="stauts===0 ? 'ico-bh' : (status===1 ? 'ico-yj' : 'ico-tg')"></i>
								<text :class="stauts===0 ? 'uni-text-red' : (status===1 ? 'uni-text-blue' : 'uni-text-green')">{{text}}</text>
							</div>
							<div class="process-adv">
								<div>
									<text class="process-role">审核人员：</text>
									<text>日期</text>
								</div>
								<p class="">审核意见</p>
							</div>
						</li>
					</ul>
				</div>
			</view>
		</view>
	</view>
</template>

<script>	
	export default {
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
			getData () {
			}
		}
	}
</script>

<style scoped>
	@import '../../common/ico.css';
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
		box-shadow: 1upx 1upx 1upx #EEEEEE;
		margin-left: 30upx;
		margin-right: 30upx;
		
	}
	.card-title {
		padding: 20upx 0 15upx 20upx;
		font-weight: bolder;
	}
	.base-body {
		font-size: 24upx;
		color: #777;
		padding: 15upx 20upx;
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
		padding: 20upx;
	}
	.card-top .product-name {
		font-weight: bolder;
		font-size: 30upx;
	}	
	.product-detail {
		color: #666;
		font-size: 26upx;
	}
	.product-price {
		color: #ee8437;
	}
	.product-status {
		color: #6dbf9c;
	}
	.card-detail {
		border-top: 1upx dashed #eee;
		display: flex;
		flex-wrap: wrap;
		padding: 20upx;
	}
	.card-detail li {
		padding-top: 20upx;
		line-height: 30upx;
		width: 33%;
		font-size: 20upx;
	}
	.process-box {
		padding: 0 30upx;
	}
	.process-box li {
		padding-left: 14upx;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}
	.process-status {
		width: 80upx;
		margin-right: 50upx;
		font-size: 24upx;
	}
	.process-adv {
		width: 530upx;
		color: #8b8a8a;
		font-size: 24upx;
	}
	.process-role {
		width: 330upx;
		display: inline-block;
		color: #333;
	}
	
	.uni-list-cell:after {
		height: 0;
	}
	.uni-collapse-content {
		padding-bottom: 40upx;
	}
</style>