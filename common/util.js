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
}
function businessStatus (val) { // 业务审批列表状态判断
  switch (val) {
    case "0":
      return "删除";
      break;
    case "1":
      return "正常";
      break;
    case "1000":
      return "待受理";
      break;
    case "2000":
      return "待审核";
      break;
    case "3000":
      return "待复审";
      break;
    case "9000":
      return "已审结";
      break;
    case "100100":
      return "商品新增";
      break;
    case "100200":
      return "信息修改";
      break;
    case "100201":
      return "商品调价";
      break;
    case "DOCUMENT":
      return "发文通知";
      break;
    case "MACHINE":
      return "生效提醒";
      break;
  }
}
module.exports = {
	formatTime: formatTime,
	formatLocation: formatLocation,
	dateUtils: dateUtils,
	dateEmpty: dateEmpty,
	processState: processState,
	businessStatus: businessStatus
}
