var app = getApp()

Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载   
        console.log('onLoad')
        var that = this
        //调用应用实例的方法获取全局数据
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    
    onShareAppMessage: function () {
        // 用户点击右上角分享
        return {
            title: '', // 分享标题
            desc: '', // 分享描述
            path: '' // 分享路径
        }
    },
    showMyWord: function () {
        wx.showModal({
            title: '提示',
            content: '此功能暂未开放，敬请期待！',
            showCancel: false,
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                }
            }
        })
    },
    showClause: function () {
        wx.navigateTo({
            url: './clause/clause',
            success: function (res) {
                // success
            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        })
    },
    showHelp: function () {
        wx.navigateTo({
            url: './help/help',
            success: function (res) {
                // success
            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        })
    }
})