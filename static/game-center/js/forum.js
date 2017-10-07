/**
 * Created by openlin on 2016/2/21.
 */
function on_load() {

    CKEDITOR.replace('text-ckeditor', {
        toolbar: [
            {name: 'document', items: ['Source', '-', 'NewPage', 'Preview', '-', 'Templates']},
            ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'],
            {name: 'basicstyles', items: ['Bold', 'Italic']}
        ]
    });
}


function add_topic(){
    var title = $('#topic_title').val();
    var type = document.getElementById("topic_type").value;
    var content = $('#topic_content').val();
    if (title == '' || content == '' || type == ''){
        alert('数据填写不完整');
        return;
    }

    function successFun(json)
    {
        if (json['status'] == "success")
        {
            window.location = window.location;
        }
        else
        {
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
            title: title,
            type: type,
            content: content,
        }
    AjaxSender("/forum/add_topic/", "post", successFun, errorFun, jsonData);
}