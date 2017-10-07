/**
 * Created by openlin on 2016/2/21.
 */
function on_load() {

}

function AjaxSender(urlStr, methordStr, successFun, errorFun, jsonData) {
    $.ajax(
        {
            url: urlStr,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-CSRFTOKEN", $.cookie('csrftoken'));
            },
            type: methordStr,
            data: jsonData,
            error: errorFun,
            success: successFun,
            dataType: 'json',
        });
}

function go_to_url(url, new_window) {
    if (new_window == null) {
        window.location.href = url;
        return;
    }
    else if (new_window == true) {
        window.open(url);
    }
    else {
        window.location.href = url;
    }
}

function getQueryStringRegExp(name) {
    var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
    if (reg.test(location.href)) {
        return decodeURI(RegExp.$2.replace(/\+/g, " "));
    }
    return "";
};

// html标签转化为普通文本
function htmlEncode(str)
{
  var s = "";
  if (str.length == 0) return "";
  s = str.replace(/&/g, "&gt;");
  s = s.replace(/</g, "&lt;");
  s = s.replace(/>/g, "&gt;");
  s = s.replace(/ /g, "&nbsp;");
  s = s.replace(/\'/g, "&#39;");
  s = s.replace(/\"/g, "&quot;");
  s = s.replace(/\n/g, "<br>");
  return s;
}

function updateVerify()
{
    $("#verify_pic").attr("src", "/get_verify_code?" + Math.random());
}
