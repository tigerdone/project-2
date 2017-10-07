/**
 * Created by openlin on 2016/2/21.
 */

function add_answer(topic_id){
    var content = $('#answer_content').val();
    if (content == ''){
        alert('数据填写不完整');
        return;
    }

    function successFun(json)
    {
        if (json['status'] == "success") {
            window.location = window.location;
        }
        else {
            if (json['msg'] == 'login required'){
                alert("请先登录");
                window.location = "/";
            }
        }
    }
    function errorFun()
    {
        alert("未知错误");
    }
    var jsonData =
        {
            topic_id: topic_id,
            content: content,
        }
    AjaxSender("/forum/add_answer/", "post", successFun, errorFun, jsonData);
}
