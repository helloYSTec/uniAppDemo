<template>
	<view class="travel-expense" v-show="travelShow">
	   <view class="travel-top">
          <view class="detail_top">
            <view class="left_circle"></view>
            <view class="right_circle"></view>
            <view class="detail_top_box">
              <view class="detail_top_name">
                <h3>{{FinanceProinstList.DEPT_NAME}}</h3>
                <h4>{{$util.acceptState(FinanceProinstList.ACCEPT_TYPE)}}</h4>
                <p>{{$util.cutDate(ExpenseBill.EXPENDBILL_DATE)}}</p>
                <view>
                    <ul class="detail_top_bottom">
						<li>
							<img class="icon_img" src="../../static/img/sqr_logo.png" alt="">申 &nbsp;请 &nbsp;人: <span>{{FinanceProinstList.STAFF_NAME}}</span>
						</li>
						<li>
							<img class="icon_img" src="../../static/img/bxbm_logo.png" alt="">报销部门: <span>{{ExpenseBill.DEPARTMENT_NAME}}</span>
						</li>
                    </ul>
                    <ul class="detail_top_bottom" style="border:none">
                      <li>
                        <img class="icon_img" src="../../static/img/bxje_logo.png" alt="">报销金额: <span>{{ExpenseBill.PAYMENT_LOWER}}</span>
                      </li>
                      <li>
                        <img class="icon_img" src="../../static/img/rzlx_logo.png" alt="">入账类型:
                        <span v-if="ExpenseBill.EXPENDBILL_TYPE === 1000">公务卡</span>
                        <span v-if="ExpenseBill.EXPENDBILL_TYPE === 2000">工资卡</span>
                        <span v-if="ExpenseBill.EXPENDBILL_TYPE === 3000">现金</span>
                        <span v-if="ExpenseBill.EXPENDBILL_TYPE === 4000">公对公转账</span>
                      </li>
                    </ul>
                </view>
              </view>
            </view>
          </view>

          <view class="detail_middle">
            <view style="padding: 0 24upx">
              <ul class="detail_middle_box">
                <li>
                    <div>
                      <img class="icon_img" src="../../static/img/ccry_logo.png" alt="">出差人员:
                    </div>
                    <div>
                      {{ExpenseBill.BUSINESS_PERSON}}
                    </div>
                </li>
                <li>
                    <div>
                      <img class="icon_img" src="../../static/img/ccsy_lgoo.png" alt="">出差事由:
                    </div>
                    <div>
                      {{ExpenseBill.BUSINESS_REASON}}
                    </div>
                </li>
                <li v-if="SubscribefeeTitle !== ''">
                    <div>
                      <img class="icon_img" src="../../static/img/xmgl_logo.png" alt="">项目关联:
                    </div>
                    <div style="color:#63a1e6;" @tap="clickGetSubscribefee()">
                      <span style="border-bottom: 1px solid rgb(99, 161, 230)">{{SubscribefeeTitle}}</span>
                    </div>
                </li>
                <li>
                    <div v-show="ImageList.length > 0" class="attachment" style="width: unset;">
                          <div>
                            <img class="icon_img" src="../../static/img/fj_logo.png" alt="">附&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;件:
                          </div>
                          <div class="imgBox">
                            <img v-for="(arr,i) in ImageList" :key="i" :src="arr" preview="0" preview-text="附件图片">
                          </div>
                    </div>
                </li>
              </ul>
            </view>
          </view>
          <!-- <view style="width:100%;margin-top:20px; overflow:hidden;">
              <img style="float:left;  margin-left:0.1rem;" @click="passOrReject('transfer')"  v-show="isExamine" src="../../static/img/yijiao_btn.png" width="30%" />
              <img style="float:left; margin-left:0.8rem" @click="passOrReject('pass')" v-show="isExamine" src="../../static/img/shenghe_btn.png" width="30%" />
              <img style="float:right;margin-right:0.1rem;" @click="passOrReject('reject')" v-show="isExamine" src="../../static/img/bohui_logo.png" width="30%" />
          </view> -->
        </view>
	   <view class="base-info">
	   	<div class="uni-list-cell uni-collapse">
	   		<div class="cat-box uni-list-cell-navigate" :class="cardShow ? ' uni-navigate-bottom' : 'uni-navigate-right'" @tap="cardShow =!cardShow">
	   			<b>行程详情</b>
	   		</div>
	   		<div class="process-box uni-collapse-content" :class="cardShow ? 'uni-active' : ''" v-show="cardShow">
	   			<view class="travel-middle" v-for="item in ExpenseDetail" :key="item.EXPENSEDETAIL_ID">
					<view class="trip_detail">
					  <view style="width:96%; height:64px;border-bottom:1px dashed rgb(234, 234, 234); box-sizing:border-box;margin-left:2%; margin-top:2px;">
						<view style="width:100%; height:30px;line-height:30px; margin-top:10px;">
						  <view  style="width:3rem;height:100%; float:left;"><span style="height:30px;width:100%;display:inline-block;font-size:0.8rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align:center;">{{item.START_PLACE}}</span></view>
						  <view class="jt_logo" style="width:2.2rem;display:inline-block;height:100%;float:left;">
							 <img v-if="item.VEHICLE_TYPE==='汽车'"  style="width:0.7rem;margin:0 0.8rem; padding-bottom:0.5rem;"  src="../../static/img/taxi_logo.png" alt="">
							 <img v-else-if="item.VEHICLE_TYPE==='飞机'"  style="width:0.7rem;margin:0 0.8rem; padding-bottom:0.5rem;"  src="../../static/img/fg_logo.png" alt="">
							 <img v-else-if="item.VEHICLE_TYPE==='高铁'"  style="width:0.7rem;margin:0 0.8rem; padding-bottom:0.5rem;"  src="../../static/img/gt_logo.png" alt="">
							 <img v-else-if="item.VEHICLE_TYPE==='火车'"  style="width:0.7rem;margin:0 0.8rem; padding-bottom:0.5rem;"  src="../../static/img/hc_logo.png" alt="">
							 <img v-else-if="item.VEHICLE_TYPE==='轮船'"  style="width:0.6rem;margin:0 0.8rem; padding-bottom:0.7rem;"  src="../../static/img/lc_logo.png" alt="">
						  </view>
						  <view style="width:3rem;height:100%;float:left;"><span style="height:30px;width:100%;display:inline-block;font-size:0.8rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align:center;">{{item.ARRIVE_PLACE}}</span></view>
						  <view style="width:7.5rem;height:100%;float:right; text-align:right; color:#6cc09c; text-align-left;font-size:0.7rem;">交通￥<span style="font-size:0.9rem; font-weight:bold; color:#ec8538;padding-left:0.3rem;">{{item.BILL_AMOUNT}}</span></view>
						</view>
						<view style="width:100%; height:26px;font-size:0.55rem;line-height:26px;margin-top:5px;">
							<span>{{$util.cutDate(item.START_DATE)}}</span><span style="padding-left:1.2rem;">{{$util.cutDate(item.ARRIVE_DATE)}}</span>
							<view style="float:right;height:100%;">
							  <view style="height:100%; float:left;font-size:0.7rem;text-align:right; ">
								<img style="width:0.7rem;" src="../../static/img/rs_logo.png" alt=""><span style="padding:0.3rem;">{{item.SUBSIDY_POPULATION}}</span>
							  </view>
							  <view style="height:100%; float:right;font-size:0.7rem; text-align:right;">
								<span style="width:0.05rem;height:0.7rem; float:left;background-color:#ccc;margin-top:0.3rem;margin-right:0.4rem"></span>
								<img  style="width:1rem;"  src="../../static/img/pj_logo.png" alt=""><span style="padding-left:0.3rem;">{{item.BILL_COUNT}}</span>
							  </view>
							</view>
						</view>
					  </view>
					  <view style="width:100%; height:40px;">
						<ul class="expenseDetail_ul" style="overflow:hidden;width:96%;font-size:0.6rem;line-height:30px;margin-left:2%;">
						  <li style="width:32%;height:30px; float:left;"><span>补贴天数：</span><span>{{item.SUBSIDY_DAY}}</span></li>
						  <li style="width:32%;height:30px; float:left;"><span>补贴标准：</span><span>{{item.URBAN_TRAFFIC_ALLOWANCE}}</span></li>
						  <li style="width:34%;height:30px; float:left;"><span>补贴金额：</span><span>{{item.SUBSIDY_AMOUNT}}</span></li>
						</ul>
					  </view>
					</view>
				</view>
	   		</div>
	   	</div>
	   </view>
       <view class="contentTwo-head jiantouChange" style="overflow: hidden;padding-top:1.2rem;" >
        <h3>其他费用</h3>
        <view   style="width:100%;border:1px solid rgb(234, 234, 234); box-shadow: 0px 1px 8px rgb(234, 234, 234) ; border-radius: 7px;margin-top:15px;">
        <view class="expenseDetail2" style="width:100%;">

              <ul class="expenseDetail_ul2" style="overflow:hidden;width:96%;font-size:0.6rem;line-height:30px;margin-left:2%;"  v-for="(item) in ExpenseDetail" :key="item.EXPENSEDETAIL_ID">
                <li style="height:30px; float:left;width:40%; ">
                  <span style="padding-left:0.3rem;">{{item.OTHER_COST}}</span>
                </li>
                <li style="width:30%; height:30px; float:left; text-align:left;">
                  <img v-if="item.OTHERBILL_COUNT!==''"  style="width:1rem;"  src="../../static/img/pj_logo.png" alt=""><span style="padding-left:0.3rem;">{{item.OTHERBILL_COUNT}}</span>
                </li>
                <li style="width:30%;height:30px; float:right;text-align:left;">
                   <span v-if="item.OTHERBILL_AMOUNT!==''" style="font-size:0.7rem;color:#6cc09c;padding-left:0.3rem;">金额￥</span>
                  <span style="font-size:0.9rem; font-weight:bold; color:#ec8538;">{{item.OTHERBILL_AMOUNT}}</span>
                </li>
              </ul>
            </view>
        </view>
    </view>
	
	</view>
</template>

<script>
	// import {mapState,mapGetters } from 'vuex';
	export default {
		data() {
			return {
				travelShow: false, // 控制页面显示
				cardShow: true, // 控制折叠面板
				ExpenseBill: {},
				FinanceProinstList:{},
				ApproveList:[],
				PassportList:{},
				ImageList:[],
				ExpenseDetail:[],
				isExamine: false, // 按钮显示隐藏
				SubscribefeeShow: false ,//已办结业务
				SubscribefeeTitle:'',//业务标题
				t_subscribefee2: {//差旅费超标准列表详情
					DEPARTMENT_NAME: '', // 报销部门
					STAFF_NAME: '', // 申请人员
					DEPT_NAME: '', // 公司名称
					FINANCEPROINST_CREATEDATE: '', // 申请时间
					BUSINESS_PERSON:'', // 出差人员
					BUSINESS_REASON:'', // 出差事由
					PAYMENT_LOWER:'', // 合计金额
				}
			};
		},
		computed:{
		},
		methods:{
			// 获取页面数据
			getExpenseData(){
				this.travelShow = false
				uni.showToast({
					title: "loading",
					icon: "loading"
				})
				let _this = this
				this.$api.post({
						action_type: 'GetExpenseDetail',
						action_data: 'o6rT6vuvZRSWKlsiu6N1zuqKSLUI',
						FINANCEPROINST_ID: this.$route.query['FINANCEPROINST_ID'], //业务内码
						OPERATION_TYPE:this.$route.query['ACCEPT_TYPE'], //业务类型
						FINANCEPROINST_NEXTID: this.$route.query['FINANCEPROINST_NEXTID'] //流程状态
				}).then(res=>{
					this.travelShow = true
					uni.hideLoading()
					console.log(res.data)
					this.GetSubscribefee(res.data.FinanceProinstList[0].FINANCEPROINST_FIELD,false)
					this.ExpenseBill = res.data.ExpenseBill[0];
					this.FinanceProinstList= res.data.FinanceProinstList[0];
					uni.setNavigationBarTitle({
						title: this.$util.acceptState(this.FinanceProinstList.ACCEPT_TYPE)
					});
					this.ApproveList = res.data.ApproveList;
					this.ExpenseDetail = res.data.ExpenseDetail;
					this.PassportList = res.data.PassportList[0];
					if (res.data.ImageList && res.data.ImageList.length > 0) {
						let arr = res.data.ImageList.map(v => {
							return v.IMAGE_URL.replace(/-/g,'/')
						})
						arr.forEach(v => {
							_this.$util.getBase64(v).then(res => {
							_this.ImageList.push(res)
							_this.$previewRefresh()//图片放大功能
							})
						})
					};
					if(this.FinanceProinstList.NOWSTAFF_ID === this.PassportList.USER_ID){
						_this.isExamine = true
					}else {
						_this.isExamine = false
					}
				})
			},
			// 获取关联详情
			GetSubscribefee(id,isClick){
				this.$api.post({
				action_type: 'GetTravelExpenseDetail',
				FINANCEPROINST_ID: id
			  }).then(res =>{
				  if (res && res.data && res.data.ExpenseBill &&  res.data.FinanceProinstList) {
				   console.log(res.data)
				  this.SubscribefeeTitle=res.data.FinanceProinstList[0].ACCEPT_NAME
					this.t_subscribefee2={
					  DEPARTMENT_NAME: res.data.ExpenseBill[0].DEPARTMENT_NAME, // 报销部门
					  STAFF_NAME:  res.data.FinanceProinstList[0].STAFF_NAME, // 申请人员
					  DEPT_NAME:  res.data.FinanceProinstList[0].DEPT_NAME, // 公司名称
					  FINANCEPROINST_CREATEDATE:  res.data.FinanceProinstList[0].FINANCEPROINST_CREATEDATE, // 申请时间
					  BUSINESS_PERSON: res.data.ExpenseBill[0].BUSINESS_PERSON, // 出差人员
					  BUSINESS_REASON: res.data.ExpenseBill[0].BUSINESS_REASON, // 出差事由
					  PAYMENT_LOWER:  res.data.ExpenseBill[0].PAYMENT_LOWER, // 合计金额
					}
				  }
				  isClick ? this.SubscribefeeShow = true : this.SubscribefeeShow = false
				})
			},
			// 关联详情点击事件
			clickGetSubscribefee(){
				this.GetSubscribefee(this.FinanceProinstList.FINANCEPROINST_FIELD,true)
			},
		},
		created() {
			this.getExpenseData();
		},
		onLoad() {
			
		}
	}
</script>

<style scoped>
	.travel-top{
		margin-top: 21upx;
		padding: 30upx;
		padding-bottom: 60upx;
		background-color: #fff;
		position: relative;
	}
	.detail_top{
		width:100%;
		display: table;
		position:relative; 
	}
	.left_circle{
		width: 30upx;
		height: 34upx;
		background-color: #fff;
		box-shadow: 2px 0px 3px rgb(234, 234, 234);
		border-radius: 50%; 
		position:absolute;
		top: 126px;
		left: -15upx;
	}
	.right_circle{
		width: 30upx;
		height: 34upx;
		background-color: #fff;
		box-shadow: -2px 0px 3px rgb(234, 234, 234);
		border-radius: 50%;
		position:absolute;
		top: 126px;
		right: -15upx;
	}
	.detail_top_box{
		background-color:#fff;
		margin-top: 24upx;
		border-bottom:6px solid #eee;
		overflow:hidden;
		box-shadow: 0px -2px 3px rgb(234, 234, 234);
	}
	.detail_top_name{
		background-color:#fff;
		margin-top:0.6rem;
		padding: 0 24upx;
	}
	.detail_top_name h3{
		color:#333333;
		line-height:40px; 
		font-size: 36upx; 
		text-align:center;
		padding-top:10px;
	}
	.detail_top_name h4{
		color:#333333; 
		font-size:36upx; 
		text-align:center;
		line-height:20px;
	}
	.detail_top_name p{
		color:#989898; 
		font-size:24upx;
		padding-top:10px; 
		text-align:right;
		line-height:30px;
	}
	.detail_top_bottom{
		width:100%;
		border-bottom:1px dashed #ccc; 
		border-top:1px dashed #ccc;
		font-size: 20upx; 
		line-height:45px;
		color:#777;
		overflow:hidden;
		display: flex;
	}
	.detail_top_bottom li{
		width: 50%;
		font-size: 26upx;
	}
	.detail_top_bottom li img.icon_img,.detail_middle_box li img.icon_img{
		width: 24upx; 
		margin-right: 10upx;
	}
	.detail_top_bottom li span{
		padding-left: 12upx;
		color:#333;
	}
	.detail_middle{
		overflow:hidden;
		box-shadow: 0px 4px 8px rgb(234, 234, 234) ;
	}
	.detail_middle_box{
		padding: 20upx 0;
		width:100%;
		font-size: 26upx;
		color:#777;
	}
	.detail_middle_box li{
		overflow:hidden;
		padding:10upx 0;
		display: flex;
	}
	.detail_middle_box li div:first-child,.detail_middle_box .attachment div:first-child{
		width: 25%;
	}
	.detail_middle_box li div:last-child,.detail_middle_box .attachment div:last-child{
		width: 75%;
		color: #333;
	}
	.detail_middle_box .attachment{
		display: flex;
	}
	.imgBox {
		display: flex;
		align-items: center;
		/* justify-content: space-around; */
	}
	.imgBox img {
		width: 20%;
		height: 100%;
	}
	.base-info {
		background-color: #fff;
		padding: 0 30upx;
	}
	.uni-list-cell:after {
		height: 0;
	}
	.base-info{
		margin-top: 30upx;
	}
	.trip_detail{
		width:100%; 
		border:1px solid rgb(234, 234, 234); 
		box-shadow: 0px 1px 8px rgb(234, 234, 234); 
		border-radius: 7px;
		margin-bottom: 20upx;
	}
</style>
