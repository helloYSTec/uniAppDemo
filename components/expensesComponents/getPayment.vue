<!-- 领付款申请 -->
<template>
	<div>
		<div class="travel-top">
			<div class="detail_top">
				<i class="left_circle"></i>
				<i class="right_circle"></i>
				<div class="detail_top_box">
					<div class="detail_top_name">
						<h3>{{FinanceProinstList.DEPT_NAME}}哈哈哈</h3>
						<h4>{{$util.acceptState(FinanceProinstList.ACCEPT_TYPE)}}哈哈哈</h4>
						<div class="detail-top-base"> 
							<span>事业部: 王某某</span>
							<span>{{$util.cutDate(ExpenseBill.EXPENDBILL_DATE)}}2018.01.12</span>
						</div>
						<div class="detail_top_bottom">
							<ul>
								<li>
									<i class="ico ico-user"></i>
									领款人员: 
									<span>{{FinanceProinstList.STAFF_NAME}}</span>
								</li>
								<li>
									<i class="ico ico-ndbz"></i>
									领款金额:
									<span>
									 	{{ExpenseBill.DEPARTMENT_NAME}}
									</span>
								</li>
							</ul>
							<ul>
								<li>
									<i class="ico ico-qtyq"></i>
									领款用途: 
									<span>{{ExpenseBill.PAYMENT_LOWER}}</span>
								</li>
								
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="detail_middle">
				<div>
					<ul class="detail_middle_box">
						<li>
							<i class="ico ico-bz"></i>
							<span>备注:</span>
						</li>
						<li>
							<i class="ico ico-fj"></i>
							<span>附件:</span>
						</li>
					</ul>
				</div>
			</div>
			<popModel :popData="popData" @showPop="showPop" @closePop='closePop' @postData='postData' @getTransferUser='getTransferUser'
			 @onCancel='clearPopData' />
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				FinanceProinstList: {},
				ExpenseBill: {}
			};
		}
	}
</script>

<style>
	@import '../../static/css/expensesTop.css';
</style>
