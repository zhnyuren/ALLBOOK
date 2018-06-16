var requests = require('../../requests/request.js');
var utils = require('../../utils/util.js');

Page({
    data: {
        id: null,
        loadidngHidden: false,
        bookData: null
    },

    copyJDText: function () {
        wx.setClipboardData({
            data: this.data.bookData.JingDong_Link + "",
            success: function (res) {
                console.log(res.data)
            }
        })
    },

    copyDDText: function () {
        wx.setClipboardData({
            data: this.data.bookData.DangDang_Link + "",
            success: function (res) {
                console.log(res.data)
            }
        })
    },

    onLoad: function (option) {
        this.setData({
            ISBN: option.ISBN
        });
    },

    onReady: function () {
        var ISBN = this.data.ISBN;
        var _this = this;

        requests.requestBookDokDetail(
            { ISBN: ISBN },
            (data) => {
                _this.setData({
                    bookData: data
                });
            }, () => {
                wx.navigateBack();
            }, () => {
                _this.setData({
                    loadidngHidden: true
                });
            });
    }
});