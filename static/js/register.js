/**
 * Created by openlin on 2016/2/21.
 */

function is_email(str) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(str);
}

function register() {
    var user_name = $('#user_name').val();
    var user_email = $('#user_email').val();
    var password1 = $('#password1').val();
    var password2 = $('#password2').val();
    if (user_name == "" || user_email == "" || password1 == "" || password2 == "") {
        alert("数据填写不完整?");
        return false;
    }
    if (!is_email(user_email)) {
        alert("请填写正确的邮箱");
        $('#user_email').val("");
        return false;
    }
    if (password1 != password2) {
        alert("两次密码不匹配！");
        $('#password1').val("");
        $('#password2').val("");
        return false;
    }
    if (password1.length < 6) {
        alert("密码位数不足6位");
        $('#password1').val("");
        $('#password2').val("");
        return false;
    }
    $('#password1').val($.md5(password1));
    $('#password2').val($.md5(password2));
    $("#register_form").submit();
    return true;
}

