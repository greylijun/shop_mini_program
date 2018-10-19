const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
};

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
};

function post(url, data) {
    wx.request({
        url: url, //仅为示例，并非真实的接口地址
        method: 'POST',
        data: data,
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function (res) {
            req.success(res.data)
        },
        fail: function (res) {
            console.log(res.data);
        }
    });
}

module.exports = {
    formatTime: formatTime,
    post: post
};
