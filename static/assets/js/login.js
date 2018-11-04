/**
 * Created by SWF on 2016/11/5.
 */

$(function() {
    $("#login_btn").click(() => {
        var name = $.trim($('#name').val());
        var pwd = $.trim($('#pwd').val());
        if (name == '' || pwd == '') {
            alert('请输入用户名密码')
        } else {
            $.ajax({
                url: '/api/login',
                method: 'post',
                data: { name: name, password: pwd },
                success: (res) => {
                    if (res.data) {
                        location.href = `zhiye.html?name=${res.data}`;
                    } else {
                        if (res.meg == '密码错误') {
                            alert('密码错误,请重新登录！')
                        } else {
                            alert('用户不存在，请注册！！');
                            location.href = `register.html`;
                        }
                    }

                },
                error: (err) => {
                    console.log(err);
                }
            })
        }
    })
});
// 替换用户名
$(function() {
    var name = location.search.split('?')[1].split('=')[1];
    $('#username').text(name);
    $('#setPaw').click(() => {
        location.href = `setPaw.html?name=${$('#username').text()}`
    });
});