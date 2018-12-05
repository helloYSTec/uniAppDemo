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
	top: 2rem;
	left: 0;
	width: 100%;
	height: 2rem;
	display: flex;
	font-size: .7rem;
	justify-content: space-around;
	line-height: 2rem;
	background-color: #f9f9f9;
	color: #999;
	border-bottom: .01rem solid #eee;
	border-top: .01rem solid #eee;
	
}
.nav-unit {
	padding: 0 .1rem;
}

</style>
