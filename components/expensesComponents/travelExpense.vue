<template>
	<view class="travel-expense">
	    <div style="margin: 0.7rem 0 0 0;padding: 0.5rem 0.5rem 1rem;background-color: #fff;position: relative;">
          <div class="detail_top" style=" width:100%;display:table; position:relative; ">
            <!-- 圆 -->
            <div class="left_circle" style="width:0.7rem;height:0.8rem;background-color: #fff;box-shadow: 2px 0px 3px rgb(234, 234, 234);border-radius: 50%; position:absolute;top:130px;"></div>
            <div class="right_circle" style="width:0.7rem;height:0.8rem;background-color: #fff;box-shadow: -2px 0px 3px rgb(234, 234, 234);border-radius: 50%; position:absolute;top:130px;right:0;"></div>
            <div style="height:200px; width:95%; margin-left:2.5%; background-color:#fff;margin-top:1.2rem;border-bottom:6px solid #eee;overflow:hidden;box-shadow: 0px -2px 3px rgb(234, 234, 234) ;">
              <div style="height:100px; width:95%; margin-left:2.5%; background-color:#fff;margin-top:0.6rem;">
                <h3 style="color:#333333; height:40px; font-size:0.8rem; text-align:center;padding:10px 0 0px;">{{FinanceProinstList.DEPT_NAME}}</h3>
                <h4 style="height:20px;paddingh: 0 20rem;width:15rem;color:#333333; font-size:0.8rem; text-align:center;line-height:20px;overflow: hidden;text-overflow: ellipsis; white-space: nowrap;">{{$util.acceptState(FinanceProinstList.ACCEPT_TYPE)}}</h4>
                <p style="color:#989898; font-size:0.5rem;padding-top:10px; text-align:right;line-height:30px;">{{$util.cutDate(ExpenseBill.EXPENDBILL_DATE)}}</p>
                <div style="height:100px;">
                    <ul style="height:45px; width:100%;border-bottom:1px dashed #ccc; border-top:1px dashed #ccc;font-size:0.6rem; line-height:45px;color:#777;overflow:hidden;">
                      <li style="width:50%; float:left;">
                        <img  style="width:0.7rem; margin-right:0.2rem;"  src="../../static/img/sqr_logo.png" alt="">申 &nbsp;请 &nbsp;人: <span style="padding-left:0.3rem;color:#333;">{{FinanceProinstList.STAFF_NAME}}</span>
                      </li>
                      <li style="width:50%; float:left;">
                        <img  style="width:0.7rem; margin-right:0.2rem;"  src="../../static/img/bxbm_logo.png" alt="">报销部门: <span style="padding-left:0.3rem;color:#333;">{{ExpenseBill.DEPARTMENT_NAME}}</span>
                      </li>
                    </ul>
                    <ul style="height:45px; width:100%;font-size:0.6rem; line-height:45px;color:#777;">
                      <li style="width:50%; float:left;">
                        <img  style="width:0.7rem; margin-right:0.2rem;"  src="../../static/img/bxje_logo.png" alt="">报销金额: <span style="padding-left:0.3rem;color:#f4904e;">{{ExpenseBill.PAYMENT_LOWER}}</span>
                      </li>
                      <li style="width:50%; float:left;">
                        <img  style="width:0.7rem; margin-right:0.2rem;"  src="../../static/img/rzlx_logo.png" alt="">入账类型:
                        <span v-if="ExpenseBill.EXPENDBILL_TYPE === 1000" style="padding-left:0.3rem;color:#333;">公务卡</span>
                        <span v-if="ExpenseBill.EXPENDBILL_TYPE === 2000" style="padding-left:0.3rem;color:#333;">工资卡</span>
                        <span v-if="ExpenseBill.EXPENDBILL_TYPE === 3000" style="padding-left:0.3rem;color:#333;">现金</span>
                        <span v-if="ExpenseBill.EXPENDBILL_TYPE === 4000" style="padding-left:0.3rem;color:#333;">公对公转账</span>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- 中 -->
          <div style="height:auto; width:95%; margin-left:2.5%;overflow:hidden;box-shadow: 0px 4px 8px rgb(234, 234, 234) ;">
            <div style="width:95%; margin-left:2.5%">
              <ul style="padding:5px 0 10px; width:100%;font-size:0.6rem;color:#777;">
                <li style="overflow:hidden;padding:10px 0;">
                    <div style="width:27%; float:left;">
                      <img  style="width:0.6rem; margin-right:0.2rem;"  src="../../static/img/ccry_logo.png" alt="">出差人员:
                    </div>
                    <div style="width:73%; float:left;color:#333;">
                      {{ExpenseBill.BUSINESS_PERSON}}
                    </div>
                </li>
                <li style="overflow:hidden;">
                    <div style="width:27%; float:left;">
                      <img  style="width:0.7rem; margin-right:0.2rem;"  src="../../static/img/ccsy_lgoo.png" alt="">出差事由:
                    </div>
                    <div style="width:73%; float:left;color:#333;">
                      {{ExpenseBill.BUSINESS_REASON}}
                    </div>
                </li>
                  <li v-if="SubscribefeeTitle !== ''" style="overflow:hidden;padding-top: 10px;">
                    <div style="width:27%; float:left;">
                      <img  style="width:0.7rem; margin-right:0.2rem;"  src="../../static/img/xmgl_logo.png" alt="">项目关联:
                    </div>
                    <div style="width:73%;margin-left:0.3rem;color:#63a1e6;" @click="clickGetSubscribefee()">
                      <span style="border-bottom: 1px solid rgb(99, 161, 230); float:left;">{{SubscribefeeTitle}}</span>
                    </div>
                </li>
                <li>
                    <div v-show="ImageList.length > 0" class="attachment">
                          <div style="width:27%; float:left;">
                            <img  style="width:0.7rem; margin-right:0.2rem;"  src="../../static/img/fj_logo.png" alt="">附&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;件:
                          </div>
                          <div class="imgBox">
                            <img v-for="(arr,i) in ImageList" :key="i" :src="arr" preview="0" preview-text="附件图片">
                          </div>
                    </div>
                </li>
              </ul>
            </div>
          </div>
          <div style="width:100%;margin-top:20px; overflow:hidden;">
              <img style="float:left;  margin-left:0.1rem;" @click="passOrReject('transfer')"  v-show="isExamine" src="../../static/img/yijiao_btn.png" width="30%" />
              <img style="float:left; margin-left:0.8rem" @click="passOrReject('pass')" v-show="isExamine" src="../../static/img/shenghe_btn.png" width="30%" />
              <img style="float:right;margin-right:0.1rem;" @click="passOrReject('reject')" v-show="isExamine" src="../../static/img/bohui_logo.png" width="30%" />
          </div>
        </div>
	</view>
</template>

<script>
	 import {mapState,mapGetters } from 'vuex';
	export default {
		data() {
			return {
				SubscribefeeTitle: '',
				ExpenseBill: {},
				FinanceProinstList:{},
				ApproveList:[],
				PassportList:{},
				ImageList:[],
				ExpenseDetail:[],
				isExamine: false
			};
		},
		computed:{
			...mapGetters(['getExpenseData'])
		},
		methods:{
			
		},
		created() {
			this.ExpenseBill = this.expenseData.ExpenseBill[0];
			this.FinanceProinstList= this.expenseData.FinanceProinstList[0];
			this.ApproveList = this.expenseData.ApproveList;
			this.ExpenseDetail = this.expenseData.ExpenseDetail;
			this.PassportList = this.expenseData.PassportList[0];
			if (this.expenseData.ImageList && this.expenseData.ImageList.length > 0) {
				let arr = this.expenseData.ImageList.map(v => {
					return v.IMAGE_URL.replace(/-/g,'/')
				})
				arr.forEach(v => {
					this.$util.getBase64(v).then(res => {
						this.ImageList.push(res)
				   // this.$previewRefresh()//图片放大功能
					})
				})
				console.log(this.ImageList)
			}
			console.log(this.getExpenseData.expenseData)
			
		},
		onLoad() {
			
		}
	}
</script>

<style>

</style>
