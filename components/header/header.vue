<template>
	
	<view class="nav-bar">
		<navigator
		 class="nav-unit"
		 hover-class="navigator-hover"
		 v-for="item in jurData"
		 :url="item.root"
		 v-show="item.jurisdiction" 
		 :key="item.id"
		 >
		 {{item.name}}
		 </navigator>
	</view>
	
    
</template>

<script>
	import Jurisdiction from '../../static/data/jurisdiction.json'
	export default {
		data () {
			return {
				jurData: Jurisdiction,
			}
		},
		methods: {
			getData () {
				let _this = this
				uni.request({
					
					url: '',
					method: 'POST',
					success: (res) => {
						res.data.forEach(n => {
							let unit = _this.jurData.find(el=> el.id === n.id)
							unit.jurisdiction = true
						})
					}
				})
			}
		},
		onLoad () {
			// this.getData()
		}
	}
</script>

<style>
.nav-bar {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 96upx;
	display: flex;
	font-size: 28upx;
	justify-content: flex-start;
	line-height: 96upx;
	background-color: #fff;
	color: #666;
	border-bottom: 1upx solid #eee;
	border-top: 1upx solid #eee;
	z-index: 1;
	
}
.nav-unit {
	padding: 0 20upx;
}

</style>
