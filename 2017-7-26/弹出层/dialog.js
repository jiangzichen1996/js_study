/**
 * Created by 晨 on 2017/7/26.
 */
define(['jquery'],function($){
    return {

        open : function(settings){
            var defaultsettings = {
                width:500,
                height:400,
                title:'弹出层',
                content:''
            };
            $.extend(defaultsettings,settings);
            var html = '<div class="dialog-container">'
                +'<div class="dialog-mask"></div>'
                +'<div class="dialog-box">'
                +'<div class="dialog-title">'
                +'<div class="dialog-item">'+defaultsettings.title+'</div>'
                +'<div class="dialog-close">[x]</div>'
                +'</div><div class="dialog-content"></div>'
                +'</div></div>';

            $(document.body).append(html);
            if(defaultsettings.content.indexOf('.html')!=-1){
                $(".dialog-content").onload(defaultsettings.content);
            }else{
                console.log(settings);

                $(".dialog-content").html(defaultsettings.content);

            }
            $('.dialog-close').on('click',function(){
                $(this).parents().remove('.dialog-container')
            });
        }
    };
});