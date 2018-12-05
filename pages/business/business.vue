<template>
	<view class="page-body">
		<view class="base-info">
			<view class="content-title">{{title}}</view>
			<view class="main-card">
				<div class="card-title">{{title}}</div>
				<div class="base-body">
					<text>申请人:</text>
				</div>
				<div class="base-body">
					<text>创建日期:</text>
				</div>
			</view>
			<view class="button-box">
				<button>移交</button>
				<button>审核</button>
				<button>驳回</button>
			</view>
		</view>
		<text>新增商品详情</text>
		<view class="base-info">
			<div class="cat-card">
				<div class="cat-box">
					<text class="cat-title">类别</text>
					<text>展开收起</text>
				</div>
				<div class="main-card">
					<div class="card-top">
						<div>
							<p class="product-name">标题</p>
							<p class="product-detail">货号</p>
						</div>
						<div>
							<p class="product-detail">售价</p>
							<p class="product-detail">单位</p>
						</div>
					</div>
					<ul class="card-detail">
						<li>进货价格：</li>
						<li>是否散装：</li>
						<li>称重方式：</li>
						<li>生效时间：</li>
					</ul>
				</div>
			</div>
		</view>
		
		<view>
			<div>
				<text>类别</text>
				<text>展开收起</text>
			</div>
			<ul>
				<li>
					<text>
						状态
					</text>
					<div>
						<p>审核人员：<text>日期</text></p>
						<p>审核意见</p>
					</div>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>	
	export default {
		data () {
			return {
				pageData: [],
				title: '什么鬼'
			}
		}
	}
</script>

<style scoped="">
	.base-info {
		margin-top: 1rem;
		background-color: #fff;
	}
	.content-title {
		height: 3.8rem;
		line-height: 3.8rem;
		text-align: center;
	}
	.main-card {
		border: .05rem solid #dcdcdc;
		border-radius: .3rem;
		box-shadow: .05rem .05rem .05rem #EEEEEE;
		width: 17.2rem;
		margin-left: auto;
		margin-right: auto;
		padding: .5rem;
	}
	.card-title {
		
	}
	.base-body {
		font-size: .6rem;
		color: #777;
		line-height: 1.5rem;
	}
	.base-body + .base-body {
		border-top: .05rem dashed #eee;
	}
	.button-box {
		display: flex;
		
	}
	button:after {
		border: 0;
	}
	button {
		font-size: .7rem;
		width: 4.9rem;
		background-image: url('../../static/img/button1.png');
		background-position: center;
		background-repeat: no-repeat;
		height: 2rem;
		background-size: contain;
		margin-top: .5rem;
		color: #fff;
		line-height: 2rem;
	}
	.cat-card {
		margin-left: auto;
		margin-right: auto;
		width: 17.2rem;
	}
	.cat-box {
		justify-content: space-between;
		display: flex;
		height: 2.4rem;
		line-height: 2.4rem;
	}
	.cat-title {
		font-weight: bolder;
	}
	.card-top {
		height: 3rem;
		display: flex;
		justify-content: space-between;
	}
	.card-top .product-name {
		font-size: .75rem;
		font-weight: bolder;
		line-height: 1.3rem;
	}
	.product-detail {
		color: #666;
		font-size: .7rem;
		line-height: 1.3rem;

	}
	.card-detail {
		border-top: .05rem dashed #eee;
		padding: .2rem 0;
	}
	.card-detail li{
		display: inline-block;
		line-height: .8rem;
		min-width: 5rem;
		font-size: .5rem;
		line-height: .7rem;
	}
</style>