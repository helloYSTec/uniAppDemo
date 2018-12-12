<template>
	<view>
		<view class="button-box">
			<span @tap="showPop(4000)"><i class="iconfont icon-yijiao"></i> 移交</span>
			<span @tap="showPop(2000)"><i class="iconfont icon-shenhe"></i> 审核</span>
			<span @tap="showPop(3000)"><i class="iconfont icon-bohui"></i> 驳回</span>
		</view>
		<uni-popup :show="popData.popShow" v-on:hidePopup="closePop">
			<div class="pop-content">
				<div class="pop-title">{{popData.title}}</div>
				<textarea class="popText" value="拟同意" v-if="popData.type!==4000" v-model="saveData.APPROVED_INFO"></textarea>
				<div class="textUnit" v-if="popData.type===2000">
					业务转出到：<span @tap="selectData('selectData')">{{saveData.NextSTAFF_Name}} <i class="uni-icon uni-icon-arrowright"></i></span>
				</div>
				<div class="textUnit">
					指定经办人：<span @tap="selectData('userData')">{{saveData.NOWACTINST_Name}} <i  class="uni-icon uni-icon-arrowright"></i></span>
				</div>
				<view >
					<button class="pop-btn" @tap="postData">{{popData.button}}</button>
				</view>
				
			</div>
		</uni-popup>
		<mpvue-picker
		 ref="mpvuePicker"
		 mode="selector"
		 :deepLength="deep"
		 :pickerValueDefault="pickerValueDefault"
		 @onConfirm="onConfirm"
		 @onCancel="onCancel"
		 :pickerValueArray="pickerValueArray"/>
		
	 </view>
</template>

<script>
	import uniPopup from '../uniComponents/uni-popup.vue';
	import mpvuePicker from '../uniComponents/mpvuePicker.vue';
    export default {
		props: {
			popData: {
				required: false,
				type: Object
			},
		},
		components: {
			uniPopup,
			mpvuePicker
		},
        data() {
            return {
				deep: 1,
				pickerValueArray: [],
				pickerValueDefault: [0],
				saveData: {
					NextSTAFF_Name: '请选择',
					NOWACTINST_Name: '请选择',
					HIGHWAYPROINST_NEXTID: '',
					NextSTAFF_ID:'',
					NOWACTINST_IDS:'',
					APPROVED_INFO:''
				},
				choseType: 1, // 1,移交,2审核,3驳回


            }
        },
        methods: {
        	showPop (type) {
        		this.saveData.HIGHWAYPROINST_NEXTID = type
        		this.$emit('showPop',type)
        	},
            closePop() {
				this.$emit('closePop', false)
            },
			selectData (val) {
        		this.choseType = val
				this.pickerValueArray = this.popData[val]
				this.$refs.mpvuePicker.show()
			},
			onConfirm(e) {
				if (this.choseType==='selectData') {
					this.saveData.NextSTAFF_ID = e.e.value[0]
					this.saveData.NextSTAFF_Name = e.label
					this.$emit('getTransferUser',e.value[0])
				}else {
					this.saveData.NOWACTINST_IDS = e.value[0]
					this.saveData.NOWACTINST_Name = e.label
				}
			},
			onCancel(e) {
				console.log(e)
			},
			postData() {
				this.$emit('postData', this.saveData)
			}
        }
    }
</script>

<style scoped>
	.button-box {
		padding-top: 20upx;
		display: flex;
		padding-bottom: 40upx;
		justify-content: space-around;
	}
	.button-box span {
		font-size: 24upx;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		text-align: center;
	}
	.button-box span i:before {
		height: 90upx;
		width: 90upx;
		border-radius: 45upx;
		background-color: #fff;
		box-shadow: 0upx 2upx 4upx #cbcbcb;
		color: #999;
	}
    .pop-content {
		width: 95%;
		padding-bottom: 20upx;
	}
	.uni-icon {
		font-size: 24upx;
		color: #53a6ec;
	}
	.pop-title {
		text-align: left;
		padding-bottom: 20upx;
		color: #333;
		font-weight: bolder;
	}
	.pop-btn {
		font-size: 30upx;
		margin-top: 40upx;
		background-color: #4da2eb;
		color: #fff;
		border-color: #d9eaf8;
		box-shadow: 1upx 1upx 1upx #d9eaf8;
	}
    .textUnit {
		margin-top: 20upx;
		display: flex;
		justify-content: space-between;
		height: 76upx;
		font-size: 24upx;
		align-items: center;
		border-bottom: 1upx solid #eee;
	}
	.textUnit span {
		width: 180upx;
		text-align: right;
		color: #2890e8;
	}
	.popText {
		width: 100%;
		height: 190upx;
		border-radius: 10upx;
		border: 1upx solid #eee;
		font-size: 24upx;
		padding: 10upx;
	}
</style>
