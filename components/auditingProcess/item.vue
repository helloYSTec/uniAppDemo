<template>
	<div class="prosess-unit">
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
	</div>
</template>

<script>
	export default {
		props: {
			item:{
				required: false,
				type: Object
			}
		},
		
	}
</script>

<style scoped>
	.prosess-unit {
		padding-left: 14upx;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		position: relative;
	}
	.process-box .prosess-unit + .prosess-unit {
		margin-top: 36upx;
	}
	.process-status {
		width: 80upx;
		margin-right: 50upx;
		font-size: 24upx;
	}
	.process-box .prosess-unit .process-status:after {
		content: '';
		height: 90upx;
		width: 1upx;
		border-left: 1upx dashed #ddd;
		position: absolute;
		left: 20upx;
		bottom: -44upx;
	}
	.process-box .prosess-unit:nth-last-child(1) .process-status:after {
		height: 0;
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
</style>