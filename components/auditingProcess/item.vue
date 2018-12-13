<template>
	<div class="prosess-unit">
		<div class="process-status">
			<i class="ico-s" :class="approveType===1 ? 'ico-tg' :  'ico-bh'"></i>
			<text :class="approveType===1 ? 'uni-text-green' : 'uni-text-red'">{{approveType===1 ? '通过': '驳回'}}</text>
		</div>
		<div class="process-adv">
			<div>
				<text class="process-role">审核人员：{{item.APPROVED_STAFF}}</text>
				<text>{{getTime(item.APPROVED_DATE)}}</text>
			</div>
			<p>{{approveType===1? item.APPROVED_NAME:'驳回意见'}}：{{item.APPROVED_INFO}}</p>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			item:{
				required: true,
				type: Object
			},
			approveType:{ // 1 通过
				required: true,
				type: Number
			}
		},
		methods: {
			getTime(time) {
				let arr = time.split(':').slice(0,-1)
				return arr.join(':').replace(/\//ig,'.')
			}
		}
		
	}
</script>

<style scoped>
	.prosess-unit {
		padding-left: 14upx;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		position: relative;
		margin-bottom: 36upx;
	}
	.process-box .prosess-unit + .prosess-unit {
		
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