function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function (n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}

function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}
var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function (milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function (dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function (number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDay()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function (str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
};
function dateEmpty(val) {
  if (val == "&nbsp;" || val == "null") {
    return "";
  } else if (val == "待审核") {
    return "财务审核";
  } else {
    return val;
  }
};

function processState(el){
	switch(el){
		case 1000:
		return '未提交';
		break;
		case 2000:
		return '办理中';
		break;
		case 3000:
		return '回退';
		break;
		case 4000:
		return '移交';
		break;
		case 9000:
		return '办结';
		break;
		case 9999:
		return '删除';
		break;
		case '':
		return '无状态';
		break;
	}
};
//图片转64位码
function getBase64 (img, w, h) {
  function getBase64Image(img,width,height) {//width、height调用时传入具体像素值，控制大小 ,不传则默认图像大小
    var canvas = document.createElement("canvas")
    canvas.width = width ? width : img.width
    canvas.height = height ? height : img.height

    var ctx = canvas.getContext("2d")
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    var dataURL = canvas.toDataURL()
    return dataURL
  }
  var image = new Image()
  image.crossOrigin = ''
  image.src = img
  if(img){
    function changePromise (resolve, reject) {
    image.onload =function (){
      resolve(getBase64Image(image, w, h))//将base64传给done上传处理
    }
  }
    return new Promise(changePromise)//问题要让onload完成后再return
  }
};

function acceptState(val){
  switch(val){
    case 401101:
      return '行政资产申请';
      break;
    case 401102:
      return '公务接待审批';
      break;
    case 401201:
      return '费用报销审批';
      break;
    case 401202:
      return '差旅费报销';
      break;
    case 401203:
      return '工程款支付';
      break;
    case 401204:
      return '经费预算申请';
      break;
    case 401205:
      return '固定资产处理';
      break;
    case 401301:
      return '内部转账审批';
      break;
    case 401302:
      return '大额支付';
      break;
    case 401303:
      return '支票领用审批';
      break;
    case 401304:
      return '领付款申请';
      break;
    case 401207:
      return '公务交通费用';
      break;
    case 401206:
      return '差旅费超标准';
      break;
  }
};
function cutDate(date){
  if(date){
    var dd = new Date(date);
    var type = 'YYYY年MM月DD日', daynum = 0
    dd.setDate(dd.getDate() + daynum) // 获取AddDayCount天后的日期
    var y = dd.getFullYear()
    var m = (dd.getMonth() + 1) < 10 ? '0' + (dd.getMonth() + 1) : (dd.getMonth() + 1) // 获取当前月份的日期，不足10补0
    var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
    var h = dd.getHours() < 10 ? '0' + dd.getHours() : dd.getHours()
    var mi = dd.getMinutes() < 10 ? '0' + dd.getMinutes() : dd.getMinutes()
    var s = dd.getSeconds() < 10 ? '0' + dd.getSeconds() : dd.getSeconds()
    return type.replace('YYYY', y).replace('MM', m).replace('DD', d).replace('hh', h).replace('mm', mi).replace('ss', s)
  }else{
    return ''
  }
}
module.exports = {
	formatTime: formatTime,
	formatLocation: formatLocation,
	dateUtils: dateUtils,
	dateEmpty: dateEmpty,
	processState: processState,
	getBase64: getBase64,
	acceptState: acceptState,
	cutDate: cutDate
}
