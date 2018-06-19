var app = getApp()
Page({
    data: {
        movies: [
            { url: 'https://img3.doubanio.com/view/subject/l/public/s24951890.jpg' },
            { url: 'https://img3.doubanio.com/view/subject/l/public/s6180723.jpg' },
            { url: 'https://img3.doubanio.com/view/subject/l/public/s28393836.jpg' },
            { url: 'https://img1.doubanio.com/view/subject/l/public/s1046558.jpg' }
        ]
    },

    onLoad: function (options) {

    },

    onShareAppMessage: function () {
        // 用户点击右上角分享
        return {
            title: '全书小程序', // 分享标题
            desc: '全书小程序', // 分享描述
            path: '' // 分享路径
        }
    }
})    