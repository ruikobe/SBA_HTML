    // 获取模型
    var modal = document.getElementById('id01');
    // 鼠标点击模型外区域关闭登录框
    window.onclick = function (event) {
        if (event.target == modal) {
            // 此元素不会被显示
            modal.style.display = "none";
        }
    } 

    $().ready(function () {  
        $('#Login').click(function () {  
            if ($('#username').val() == "" || $('#password').val() == "") {  
                alert("Username and password cannot be blank！");  
            }  
            else {  
                $.ajax({  
                    type: "POST",  
                    url: "Ajax/LoginHandler.ashx",  
                    data: "username=" + escape($('#username').val()) + "&password=" + escape($('#password').val()),  
                    beforeSend: function () {  
                        $("#loading").css("display", "block"); //点击登录后显示loading，隐藏输入框  
                        $("#login").css("display", "none");  
                    },  
                    success: function (msg) {  
                        $("#loading").hide(); //隐藏loading  
                        if (msg == "success") {  
                            //parent.tb_remove();  
                            parent.document.location.href = "index.htm"; //如果登录成功则跳到管理界面  
                            parent.tb_remove();  
                        }  
                        if (msg == "fail") {  
                            alert("e cannot find the username or password!");  
                        }  
                    },  
                    complete: function (data) {  
                        $("#loading").css("display", "none"); //点击登录后显示loading，隐藏输入框  
                        $("#login").css("display", "block");  
                    },  
                    error: function (XMLHttpRequest, textStatus, thrownError) {  
                    }  
                });  
            }  
        });  
    });  

    if (username == "admin" && password == "1")  
    {  
        context.Response.Write("success");  
        //存储session  
    }  
    else  
    {  
        context.Response.Write("fail");  
    } 