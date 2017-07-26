/**
 * Created by ³¿ on 2017/7/26.
 */
define(['../../jquery.min'],function(){
    return {
        open : function(settings){
            var defaulsettings = {
                width:500,
                height:400,
                title:'µ¯³ö²ã',
                content:''

            }

            var html = '<div class="dialog-container">'
                +'<div class="dialog-mask"></div>'
                +'<div class="dialog-box">'
                +'<div class="dialog-title">'
                +'<div class="dialog-item">'+defaulsettings.title+'</div>'
                +'<div class="dialog-close">[x]</div>'
                +'</div><div class="dialog-content"></div>'
                +'</div></div>';
            $(document.body).append(html);
        }
    };
});