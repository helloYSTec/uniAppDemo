export default {
   /** 
    * 自定义post,get函数，返回Promise
    * @param {String}      url 接口网址
    * @param {arrayObject} data 要传的数组对象 例如: {name: '武当山道士', age: 32}
    * +-------------------
    * @return {Promise}    promise 返回promise供后续操作
    */
   post : function(url, data){
      var promise = new Promise((resolve, reject) => {
         //init
         var that = this;
         var postData = data;
         //网络请求
         uni.request({
            url: url,
            data: postData,
            method: 'POST',
            header: { 'content-type': 'application/x-www-form-urlencoded' },
            success: function (res) {//服务器返回数据
               if (res && (res.status ===200 || res.status ===304 || res.status===400)) {
                  resolve( res );
               } else {
				   //返回错误提示信息
                  reject( res.data.info );
               }
            },
            error: function (e) {
               reject('网络出错');
            }
         })
      });
      return promise;
   },
   get : function(url, data){
		 var promise = new Promise((resolve, reject) => {
				//init
			var that = this;
			var postData = data;
			//网络请求
			uni.request({
				url: url,
				data: postData,
				method: 'GET',
				// header: { 'content-type': 'application/x-www-form-urlencoded' },
				success: function (res) {//服务器返回数据
					if (res && (res.status ===200 || res.status ===304 || res.status===400)) {
					resolve( res );
					} else {
						//返回错误提示信息
					reject( res.data.info );
					}
				},
				error: function (e) {
					reject('网络出错');
				}
			})
		 });
   return promise;
   },
}