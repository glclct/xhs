/**
 * Created by SWF on 2016/11/5.
 */

$(function() {
    $('#register_btn').click(() => {
        var phone = $.trim($('#phone').val());
        var pwd = $.trim($('#pwd').val());
        if (phone == '' || pwd == '') {
            alert('手机号、密码不能为空')
        } else {
            $.ajax({
                url: '/api/register',
                method: 'post',
                data: { name: phone, password: pwd },
                success: (res) => {
                    alert(res.meg + '请登录');
                    location.href = '/login.html'
                },
                error: (err) => {
                    console.log(err);
                }
            })
        }
    });
});