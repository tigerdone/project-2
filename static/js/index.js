/**
 * Created by openlin on 2016/2/21.
 */


function login() {
    var username = $('#username').val();
    var password = $('#password').val();
    password = $.md5(password);
    if (username == "" || password == "") {
        alert('请输入账号和密码');
        return false;
    }
    function successFun(json) {
        if (json['status'] == "success") {
            var next = getQueryStringRegExp('next');
            if (next != ''){
                window.location = next;
                return;
            }
            window.location = window.location;
        }
        else {
            alert(json['msg']);
        }
    }

    function errorFun() {
        alert("系统错误");
    }

    var jsonData =
    {
        username: username,
        password: password,
    }
    AjaxSender("/user/login/", "post", successFun, errorFun, jsonData);
}