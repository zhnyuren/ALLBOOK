var list;

Page({
    data: {
        // 左侧点击类样式
        curNav: 'a0',
        listChild1: null,
        loadidngHidden: false,
    },

    onShareAppMessage() {
        return {
            title: '分类页面',
            desc: '分类页面',
            path: '/pages/category/category'
        };
    },

    toDetailPage: function (e) {
        var ISBN = e.currentTarget.dataset.bid; //图书id [data-bid]
        console.log(ISBN);
        wx.navigateTo({
            url: '../detail/detail?ISBN=' + ISBN
        });
    },

    onLoad: function (option) {
        var that = this;
        wx.request({
            url: 'https://ria8l1sk.qcloud.la/application/phplibrary_dir/All_Category_List.php',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            method: 'POST',
            data: null,
            success: function (res) {
                that.setData({
                    listChild1: res.data,
                    loadidngHidden: true
                }),
                wx.getSystemInfo({
                    success: function (res) {
                        that.setData({
                            list: that.data.listChild1,
                            winHeight: res.windowHeight,
                        })
                    }
                })
            }
        })
    },

    onReady: function () {
        var that = this;
        // 获取可视区高度
    },
    //点击左侧 tab ，右侧列表相应位置联动 置顶
    switchRightTab: function (e) {
        var id = e.target.id;
        console.log(typeof id)
        this.setData({
            // 动态把获取到的 id 传给 scrollTopId
            scrollTopId: id,
            // 左侧点击类样式
            curNav: id
        })
    }
})
