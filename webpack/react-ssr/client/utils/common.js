/**
 * 时间过滤器
 * @param {number} time 
 * @param {string} fmt 
 */
export let format = (time, fmt) => {
    if (!time) return '';
    fmt = fmt || 'yyyy-MM-dd hh:mm';
    let date = new Date(time);

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
            RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)
        );
    }

    let dt = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };

    for (let key in dt) {
        if (new RegExp(`(${key})`).test(fmt)) {
            let str = dt[key] + '';
            fmt = fmt.replace(RegExp.$1,
                (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length)
            );
        }
    }
    return fmt;
};

/**
 * es6 find方法  查找日期
 * @param {Array} arr 
 * @param {string} key 
 * @param {string} value 
 */
export let arrayFind = (arr, key, value) => {
    console.log(value);
    // eslint-disable-next-line no-debugger
    for (var i = 0; i < arr.length; i++) {
        if (format(arr[i][key], 'yyyy-MM-dd') === value) {
            return arr[i];
        }
    }
    return false;

};

/**
 * es6 find方法  查找对象
 * @param {Array} arr 
 * @param {string} key 
 * @param {string} value 
 */
export let arrayFindTo = (arr, key, value) => {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][key] === value) {
            return arr[i];
        }
    }
    return false;

};

/**
 * 设置cookie
 * @param {string} key 
 * @param {*} val 
 * @param {*} time 
 */

export let setCookie = function (key, val, time) { //设置cookie方法
    var date = new Date(); //获取当前时间
    var expiresDays = time;  //将date设置为n天以后的时间
    date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000); // 设置过期时间 单位：天
    document.cookie = key + "=" + val + ";expires=" + date.toGMTString();  //设置cookie
};


/**
 * 查询当前URL search 参数
 */
export let queryUrlValue = () => {
    let search = location.search.substring(1).split('&');
    let params = {};
    search.forEach(item => {
        let value = item.split('=');
        params[value[0]] = value[1];
    });
    return params;
};

export let getPlatform = function () {
    return window.WCRClassRoom && window.WCRClassRoom.getClientType();
};

// 生成设备唯一标识
export let setUuid = () => {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
};