var api = require('./api.js');
var utils = require('../utils/util.js');

/**
 * 网路请求
 */
function request(url, data, successCb, errorCb, completeCb) {
    wx.request({
        url: url,
        header: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        method: 'POST',
        data: data,
        success: function (res) {
            console.log(res.data);
            if (res.statusCode == 200) {
                utils.isFunction(successCb) && successCb(res.data);
            } else
                console.log('请求异常', res);
        },
        error: function () {
            utils.isFunction(errorCb) && errorCb();
        },
        complete: function () {
            utils.isFunction(completeCb) && completeCb();
        }
    });
}

/**
 * 搜索图书
 */
function requestSearchBook(data, successCb, errorCb, completeCb) {
    request(api.API_BOOK_SEARCH, data, successCb, errorCb, completeCb);
}

/**
 * 获取图书详细信息
 */
function requestBookDokDetail(data, successCb, errorCb, completeCb) {
    request(api.API_BOOK_DETAIL, data, successCb, errorCb, completeCb);
}

/**
 * 获取分类信息
 */
function requestCategory(data, successCb, errorCb, completeCb) {
    request(api.API_BOOK_CATEGORY, data, successCb, errorCb, completeCb);
}

module.exports = {
    requestSearchBook: requestSearchBook,
    requestBookDokDetail: requestBookDokDetail,
    requestCategory: requestCategory
}

