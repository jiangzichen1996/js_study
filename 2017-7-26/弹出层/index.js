require(['jquery','dialog1'],function($,Dialog){ //要使用推荐写法
    $('#btn').on('click',function(){
        var settings = {
            // width: 400,
            // height: 300,
            // title: "我的弹出层",
            //content: "login.html"
        };
        // dialog.open(settings);

        var dialog = new Dialog(settings);
        dialog.open();
    });
});