<template>
	<view>
		<view class="button-box">
				
			<button @tap="showPop(1)"><i class="ico ico-yijiao"></i> 移交</button>
			<button @tap="showPop(2)"><i class="ico ico-shenhe"></i> 审核</button>
			<button @tap="showPop(3)"><i class="ico ico-bohui"></i> 驳回</button>
		</view>
		<uni-popup :show="popData.popShow" v-on:hidePopup="closePop">
			<div class="pop-content">
				<div class="pop-title">{{popData.title}}</div>
				<textarea class="popText" value="拟同意" v-if="popData.type!==1" v-model="saveData.APPROVED_INFO"></textarea>
				<div class="textUnit" v-if="popData.selectData>0">
					业务转出到：<span @tap="selectData('selectData')">请选择 <i class="uni-icon uni-icon-arrowright"></i></span>
				</div>
				<div class="textUnit">
					指定经办人：<span @tap="selectData('userData')">请选择 <i  class="uni-icon uni-icon-arrowright"></i></span>
				</div>
				<view >
					<button class="pop-btn" @tap="saveData">{{popData.button}}</button>
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
					NextSTAFF_ID:'',
					NOWACTINST_IDS:'',
					APPROVED_INFO:''
				},
				choseType: 1, // 1,移交,2审核,3驳回


            }
        },
        methods: {
        	showPop (type) {
        		this.choseType = type
        		this.$emit('showPop',type)
        	},
            closePop() {
				this.$emit('closePop', false)
            },
			selectData (val) {
				this.pickerValueArray = this.popData[val]
				this.$refs.mpvuePicker.show()
			},
			onConfirm(e) {
				if (this.choseType==='selectData') {
					this.saveData.NextSTAFF_ID = e.value
					this.$emit('getTransferUser',e.value[0])
				}
				this.saveData = JSON.stringify(e)
			},
			onCancel(e) {
				console.log(e)
			},
			saveData() {
				this.$emit('saveData', this.saveData)
			}
        }
    }
</script>

<style scoped>
	.button-box {
		padding-top: 20upx;
		display: flex;
		padding-bottom: 40upx;
	}
	.button-box button:after {
		border: 0;
	}
	.button-box button {
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
